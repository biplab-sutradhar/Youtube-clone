
var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function nameGenerate() {
return nameList[Math.floor(Math.random() * nameList.length)];
    
};


const words = [
  'apple', 'banana', 'chocolate', 'coffee', 'friend', 'happy', 'sunshine',
  'mountain', 'ocean', 'flower', 'garden', 'laughter', 'book', 'music', 'journey',
  'kindness', 'smile', 'family', 'love', 'peace', 'serenity', 'hope', 'harmony',
  'butterfly', 'dream', 'inspiration', 'creativity', 'joy', 'gratitude', 'compassion',
  'grace', 'gentleness', 'tranquility', 'wisdom', 'patience', 'forgiveness', 'serendipity',
  'delight', 'whisper', 'illumination', 'twilight', 'melody', 'embrace', 'beauty', 'whimsical',
  'reflection', 'lullaby', 'radiance', 'tenderness', 'tranquil', 'cherish', 'cascade', 'velvet',
  'ethereal', 'effervescent', 'mystical', 'glimmer', 'whispering', 'enchantment', 'resonance',
  'synchronicity', 'azure', 'silhouette', 'luminous', 'cascade', 'eternity', 'clarity', 'serenity',
  'twilight', 'breeze', 'harmony', 'bliss', 'glow', 'graceful', 'freedom', 'imagination', 'reverie',
  'soothing', 'harmony', 'peaceful', 'tranquil', 'gentle', 'serene', 'radiant', 'healing', 'captivating',
  'delicate', 'whispering', 'ethereal', 'lullaby', 'scintillating', 'breathtaking', 'melodic', 'gossamer',
  'ambrosial', 'gratitude', 'resilience', 'adventure', 'delight', 'heartfelt', 'illuminate', 'tranquility',
  'solitude', 'courage', 'imagine', 'adventure', 'effervescent', 'whimsical', 'paradise', 'euphoria', 'melody',
  'celestial', 'whisper', 'graceful', 'pure', 'essence', 'crescendo', 'infinity', 'serendipity', 'blissful', 'embrace',
  'gossamer', 'infinite', 'harmony', 'majestic', 'breathtaking', 'whispering', 'luminescent', 'elegance', 'heavenly', 'captivating'
];




var length = Math.floor(Math.random()*20)

export function stringGenerate() {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return result.trim();
}
