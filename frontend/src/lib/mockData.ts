import type { Beer } from './types';

export const beers: Beer[] = [
  {
    name: 'Pale Ale',
    manufacturer: 'Brewery A',
    category: 'IPA',
    imageUrl: 'https://example.com/pale-ale.jpg',
    ratings: [
      { reviewer: { name: 'John Doe' }, createdAt: new Date('2023-01-01'), rating: 4.2 },
      { reviewer: { name: 'Jane Smith' }, createdAt: new Date('2023-02-15'), rating: 4.0 },
    ],
    averageRating: 4.1,
  },
  {
    name: 'Stout',
    manufacturer: 'Brewery B',
    category: 'Stout',
    imageUrl: 'https://example.com/stout.jpg',
    ratings: [
      { reviewer: { name: 'Alice Johnson' }, createdAt: new Date('2023-03-10'), rating: 4.5 },
      { reviewer: { name: 'Bob Brown' }, createdAt: new Date('2023-04-05'), rating: 4.3 },
    ],
    averageRating: 4.4,
  },
  {
    name: 'Lager',
    manufacturer: 'Brewery C',
    category: 'Lager',
    imageUrl: 'https://example.com/lager.jpg',
    ratings: [
      { reviewer: { name: 'Charlie Davis' }, createdAt: new Date('2023-05-20'), rating: 3.8 },
      { reviewer: { name: 'Dana White' }, createdAt: new Date('2023-06-15'), rating: 4.0 },
    ],
    averageRating: 3.9,
  },
  {
    name: 'Porter',
    manufacturer: 'Brewery D',
    category: 'Porter',
    imageUrl: 'https://example.com/porter.jpg',
    ratings: [
      { reviewer: { name: 'Eve Black' }, createdAt: new Date('2023-07-10'), rating: 4.1 },
      { reviewer: { name: 'Frank Green' }, createdAt: new Date('2023-08-05'), rating: 4.0 },
    ],
    averageRating: 4.05,
  },
  {
    name: 'Sour',
    manufacturer: 'Brewery E',
    category: 'Sour',
    imageUrl: 'https://example.com/sour.jpg',
    ratings: [
      { reviewer: { name: 'Grace Lee' }, createdAt: new Date('2023-09-10'), rating: 3.9 },
      { reviewer: { name: 'Hank Brown' }, createdAt: new Date('2023-10-05'), rating: 4.2 },
    ],
    averageRating: 4.05,
  },
  {
    name: 'Double IPA',
    manufacturer: 'Brewery F',
    category: 'IPA',
    imageUrl: 'https://example.com/double-ipa.jpg',
    ratings: [
      { reviewer: { name: 'Ivy White' }, createdAt: new Date('2023-11-10'), rating: 4.6 },
      { reviewer: { name: 'Jack Black' }, createdAt: new Date('2023-12-05'), rating: 4.4 },
    ],
    averageRating: 4.5,
  },
  {
    name: 'Amber Ale',
    manufacturer: 'Brewery G',
    category: 'Lager',
    imageUrl: 'https://example.com/amber-ale.jpg',
    ratings: [
      { reviewer: { name: 'Karen Blue' }, createdAt: new Date('2023-01-10'), rating: 4.0 },
      { reviewer: { name: 'Leo Green' }, createdAt: new Date('2023-02-05'), rating: 3.9 },
    ],
    averageRating: 3.95,
  },
  {
    name: 'Milk Stout',
    manufacturer: 'Brewery H',
    category: 'Stout',
    imageUrl: 'https://example.com/milk-stout.jpg',
    ratings: [
      { reviewer: { name: 'Mia Red' }, createdAt: new Date('2023-03-10'), rating: 4.3 },
      { reviewer: { name: 'Nate Yellow' }, createdAt: new Date('2023-04-05'), rating: 4.1 },
    ],
    averageRating: 4.2,
  },
  {
    name: 'Imperial Porter',
    manufacturer: 'Brewery I',
    category: 'Porter',
    imageUrl: 'https://example.com/imperial-porter.jpg',
    ratings: [
      { reviewer: { name: 'Olivia Purple' }, createdAt: new Date('2023-05-10'), rating: 4.5 },
      { reviewer: { name: 'Paul Orange' }, createdAt: new Date('2023-06-05'), rating: 4.4 },
    ],
    averageRating: 4.45,
  },
  {
    name: 'Berliner Weisse',
    manufacturer: 'Brewery J',
    category: 'Sour',
    imageUrl: 'https://example.com/berliner-weisse.jpg',
    ratings: [
      { reviewer: { name: 'Quinn Pink' }, createdAt: new Date('2023-07-10'), rating: 3.8 },
      { reviewer: { name: 'Ray Brown' }, createdAt: new Date('2023-08-05'), rating: 4.0 },
    ],
    averageRating: 3.9,
  },
  {
    name: 'Session IPA',
    manufacturer: 'Brewery K',
    category: 'IPA',
    imageUrl: 'https://example.com/session-ipa.jpg',
    ratings: [
      { reviewer: { name: 'Sara White' }, createdAt: new Date('2023-09-10'), rating: 4.2 },
      { reviewer: { name: 'Tom Black' }, createdAt: new Date('2023-10-05'), rating: 4.1 },
    ],
    averageRating: 4.15,
  },
  {
    name: 'Pilsner',
    manufacturer: 'Brewery L',
    category: 'Lager',
    imageUrl: 'https://example.com/pilsner.jpg',
    ratings: [
      { reviewer: { name: 'Uma Blue' }, createdAt: new Date('2023-11-10'), rating: 3.9 },
      { reviewer: { name: 'Vic Green' }, createdAt: new Date('2023-12-05'), rating: 4.0 },
    ],
    averageRating: 3.95,
  },
  {
    name: 'Dry Stout',
    manufacturer: 'Brewery M',
    category: 'Stout',
    imageUrl: 'https://example.com/dry-stout.jpg',
    ratings: [
      { reviewer: { name: 'Wendy Red' }, createdAt: new Date('2023-01-10'), rating: 4.3 },
      { reviewer: { name: 'Xander Yellow' }, createdAt: new Date('2023-02-05'), rating: 4.2 },
    ],
    averageRating: 4.25,
  },
  {
    name: 'Robust Porter',
    manufacturer: 'Brewery N',
    category: 'Porter',
    imageUrl: 'https://example.com/robust-porter.jpg',
    ratings: [
      { reviewer: { name: 'Yara Purple' }, createdAt: new Date('2023-03-10'), rating: 4.4 },
      { reviewer: { name: 'Zane Orange' }, createdAt: new Date('2023-04-05'), rating: 4.3 },
    ],
    averageRating: 4.35,
  },
  {
    name: 'Gose',
    manufacturer: 'Brewery O',
    category: 'Sour',
    imageUrl: 'https://example.com/gose.jpg',
    ratings: [
      { reviewer: { name: 'Amy Pink' }, createdAt: new Date('2023-05-10'), rating: 3.7 },
      { reviewer: { name: 'Ben Brown' }, createdAt: new Date('2023-06-05'), rating: 3.9 },
    ],
    averageRating: 3.8,
  },
  {
    name: 'Triple IPA',
    manufacturer: 'Brewery P',
    category: 'IPA',
    imageUrl: 'https://example.com/triple-ipa.jpg',
    ratings: [
      { reviewer: { name: 'Cara White' }, createdAt: new Date('2023-07-10'), rating: 4.7 },
      { reviewer: { name: 'Dan Black' }, createdAt: new Date('2023-08-05'), rating: 4.5 },
    ],
    averageRating: 4.6,
  },
  {
    name: 'Helles Lager',
    manufacturer: 'Brewery Q',
    category: 'Lager',
    imageUrl: 'https://example.com/helles-lager.jpg',
    ratings: [
      { reviewer: { name: 'Eva Blue' }, createdAt: new Date('2023-09-10'), rating: 3.8 },
      { reviewer: { name: 'Finn Green' }, createdAt: new Date('2023-10-05'), rating: 4.0 },
    ],
    averageRating: 3.9,
  },
  {
    name: 'Oatmeal Stout',
    manufacturer: 'Brewery R',
    category: 'Stout',
    imageUrl: 'https://example.com/oatmeal-stout.jpg',
    ratings: [
      { reviewer: { name: 'Gina Red' }, createdAt: new Date('2023-11-10'), rating: 4.4 },
      { reviewer: { name: 'Hugo Yellow' }, createdAt: new Date('2023-12-05'), rating: 4.3 },
    ],
    averageRating: 4.35,
  },
  {
    name: 'Baltic Porter',
    manufacturer: 'Brewery S',
    category: 'Porter',
    imageUrl: 'https://example.com/baltic-porter.jpg',
    ratings: [
      { reviewer: { name: 'Ivy Purple' }, createdAt: new Date('2023-01-10'), rating: 4.5 },
      { reviewer: { name: 'Jack Orange' }, createdAt: new Date('2023-02-05'), rating: 4.4 },
    ],
    averageRating: 4.45,
  },
  {
    name: 'Flanders Red Ale',
    manufacturer: 'Brewery T',
    category: 'Sour',
    imageUrl: 'https://example.com/flanders-red-ale.jpg',
    ratings: [
      { reviewer: { name: 'Kate Pink' }, createdAt: new Date('2023-03-10'), rating: 3.9 },
      { reviewer: { name: 'Leo Brown' }, createdAt: new Date('2023-04-05'), rating: 4.1 },
    ],
    averageRating: 4.0,
  },
];
