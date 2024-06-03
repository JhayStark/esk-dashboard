import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function rgbToHex(r: number, g: number, b: number) {
  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function generateRandomHexCode() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256); // Random number between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB to hex
  const hex = rgbToHex(r, g, b);

  return hex;
}

// Function to generate random integer within a specified range
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate data format for each day
function generateDailyData(
  dayName: string,
  locations: string[]
): Record<string, number | string> {
  const dailyData: Record<string, number | string> = { name: dayName };

  // Add random value for each location
  locations.forEach(location => {
    const randomValue = getRandomInt(500, 1000); // Adjust range as needed
    dailyData[location] = randomValue;
  });

  return dailyData;
}

// List of locations
const locations: string[] = [
  'madina',
  'kaneshie',
  'makola',
  'paris',
  'england',
  'tokyo',
  'dubai',
];

// Function to generate data for each day of the week
export function generateWeeklyData(
  locations: string[]
): Record<string, number | string>[] {
  const daysOfWeek: string[] = [
    'Mon',
    'Tues',
    'Wednes',
    'Thurs',
    'Fri',
    'Sat',
    'Sun',
  ];
  const weeklyData: Record<string, number | string>[] = [];

  daysOfWeek.forEach(day => {
    const dailyData = generateDailyData(day, locations);
    weeklyData.push(dailyData);
  });

  return weeklyData;
}
