import { db } from '@/db';
import { users } from '@/db/schema/users';

const seedUsers = async () => {
  const userProfiles = [
    { firstName: 'Alice', lastName: 'Lee', gender: 'female', age: 20, location: 'London, UK', university: 'Imperial College', interests: ['music', 'sports'], imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { firstName: 'Bob', lastName: 'Smith', gender: 'male', age: 23, location: 'Los Angeles, USA', university: 'UCLA', interests: ['movies', 'sports'], imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D' },
    { firstName: 'Charlie', lastName: 'Brown', gender: 'male', age: 30, location: 'London, UK', university: 'Imperial College', interests: ['music', 'gaming'], imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' },
    { firstName: 'Dana', lastName: 'Miller', gender: 'female', age: 32, location: 'San Francisco, USA', university: 'Stanford', interests: ['reading', 'hiking'], imageUrl: 'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' },
    { firstName: 'Eve', lastName: 'Garcia', gender: 'female', age: 28, location: 'Los Angeles, USA', university: 'UCLA', interests: ['travel', 'music'], imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D' },
    { firstName: 'Frank', lastName: 'Williams', gender: 'male', age: 29, location: 'London, UK', university: 'Imperial College', interests: ['gaming', 'sports'], imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8' },
    { firstName: 'Grace', lastName: 'Rodriguez', gender: 'female', age: 34, location: 'London, UK', university: 'Columbia', interests: ['music', 'movies'], imageUrl: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' },
    { firstName: 'Heidi', lastName: 'Martinez', gender: 'female', age: 40, location: 'San Francisco, USA', university: 'Stanford', interests: ['hiking', 'photography'], imageUrl: 'https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8' },
    { firstName: 'Ivan', lastName: 'Johnson', gender: 'male', age: 51, location: 'Los Angeles, USA', university: 'USC', interests: ['movies', 'travel'], imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { firstName: 'Judy', lastName: 'Jones', gender: 'female', age: 19, location: 'London, UK', university: 'Imperial College', interests: ['sports', 'gaming'], imageUrl: 'https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8' },
    {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      age: 28,
      location: 'New York, USA',
      university: 'Columbia University',
      interests: ['reading', 'cooking', 'traveling'],
      imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'
    },
    {
      firstName: 'Emily',
      lastName: 'Smith',
      gender: 'female',
      age: 25,
      location: 'Los Angeles, USA',
      university: 'UCLA',
      interests: ['photography', 'yoga', 'painting'],
      imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      gender: 'male',
      age: 32,
      location: 'London, UK',
      university: 'Imperial College London',
      interests: ['football', 'music', 'coding'],
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTE0MTk1MzF8fGVufDB8fHx8fA%3D%3D'
    },
    {
      firstName: 'Sarah',
      lastName: 'Brown',
      gender: 'female',
      age: 23,
      location: 'Sydney, Australia',
      university: 'University of Sydney',
      interests: ['hiking', 'dancing', 'singing'],
      imageUrl: 'https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'
    },
    {
      firstName: 'David',
      lastName: 'Kim',
      gender: 'male',
      age: 30,
      location: 'Seoul, South Korea',
      university: 'Seoul National University',
      interests: ['gaming', 'cooking', 'photography'],
      imageUrl: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D'
    }
  ];

  await Promise.all(userProfiles.map(async (userProfile) => await db.insert(users).values(userProfile)));

  console.log('Users seeded');
};

seedUsers();