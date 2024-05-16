'use server';

import { db } from '@/db';
import { sql } from 'drizzle-orm';
import { currentUserProfile } from '@/db/mockData/user';

export const getRecommendedUsers = async () => {
    try {
        // simulate loggedIn user, updating the university and interests from currentUserProfile will get different result
        const { id, university, interests } = currentUserProfile;

        // the data in the sqlite database can refer to seedUsers.ts file
        const query = sql.raw(`WITH RECURSIVE interest_conditions AS (
            SELECT 1 AS idx
            UNION ALL
            SELECT idx + 1
            FROM interest_conditions
            WHERE idx < 1
        )
        SELECT
            id,
            first_name as firstName,
            last_name as lastName,
            image_url as imageUrl,
            gender,
            age,
            location,
            interests,
            university,
            SUM(
                ('${university}' = university) * 5 + 
                ${interests.map(interest => `CASE WHEN interests LIKE '%${interest}%' THEN 3 ELSE 0 END `)
                .join(' + ')}   
            )
            AS totalScore
        FROM
            users
        CROSS JOIN
            interest_conditions
        WHERE
            id != ${id}
        GROUP BY
            id
        ORDER BY
            totalScore DESC
        LIMIT 10;
      `);
        
        const response = db.all(query);

        return response;
    } catch (err: any) {
        return { err: 'UNABLE_GET_RECOMMENDED_USERS', message: 'Unable to get recommended users' };
    }
};
