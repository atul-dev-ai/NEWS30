export const categories = [
  { id: 'latest', name: 'সর্বশেষ' },
  { id: 'bangladesh', name: 'বাংলাদেশ' },
  { id: 'politics', name: 'রাজনীতি' },
  { id: 'world', name: 'বিশ্ব' },
  { id: 'economy', name: 'অর্থনীতি' },
  { id: 'sports', name: 'খেলা' },
  { id: 'tech', name: 'প্রযুক্তি' },
];

export const dummyStories = [
  {
    id: 'story-1',
    headline: 'ঢাকায় নতুন অর্থনৈতিক নীতি ঘোষণা, শেয়ার বাজারে প্রভাব',
    summary: 'সরকার নতুন একটি অর্থনৈতিক নীতির ঘোষণা দিয়েছে। নীতিটিতে কয়েকটি গুরুত্বপূর্ণ পরিবর্তনের কথা জানানো হয়েছে যা আগামী মাস থেকে কার্যকর হবে। এর ফলে শেয়ার বাজার এবং আমদানি-রপ্তানি খাতে ব্যাপক পরিবর্তন আসতে পারে।',
    category: 'অর্থনীতি',
    publishedTime: '15 min ago',
    breaking: true,
    heroImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
    sources: [
      { id: 'prothom-alo', name: 'Prothom Alo', originalHeadline: 'নতুন অর্থনৈতিক নীতি ঘোষণা সরকারের' },
      { id: 'bdnews24', name: 'BDNews24', originalHeadline: 'অর্থনীতিতে নতুন দিগন্ত: সরকারের নতুন নীতি' },
      { id: 'daily-star', name: 'The Daily Star', originalHeadline: 'Govt announces new economic policy' }
    ],
    primarySource: 'Prothom Alo'
  },
  {
    id: 'story-2',
    headline: 'জাতীয় ক্রিকেট দলে নতুন অধিনায়কের নাম ঘোষণা',
    summary: 'আসন্ন সিরিজের জন্য বাংলাদেশ ক্রিকেট বোর্ড (বিসিবি) নতুন অধিনায়কের নাম ঘোষণা করেছে। দীর্ঘদিনের গুঞ্জন শেষে তরুণ এই খেলোয়াড়কে দায়িত্ব দেয়া হয়েছে।',
    category: 'খেলা',
    publishedTime: '1 hour ago',
    breaking: false,
    heroImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    sources: [
      { id: 'prothom-alo', name: 'Prothom Alo', originalHeadline: 'ক্রিকেট দলের নতুন অধিনায়ক' },
      { id: 'dhaka-tribune', name: 'Dhaka Tribune', originalHeadline: 'New captain for national cricket team' }
    ],
    primarySource: 'BDNews24'
  },
  {
    id: 'story-3',
    headline: 'বিশ্ববাজারে তেলের দাম আরেক দফা কমল',
    summary: 'আন্তর্জাতিক বাজারে অপরিশোধিত তেলের দাম আবারও কমেছে। গত কয়েক সপ্তাহে এই নিয়ে তৃতীয়বারের মতো দাম কমল, যার প্রভাব দেশের বাজারেও পড়তে পারে।',
    category: 'বিশ্ব',
    publishedTime: '2 hours ago',
    breaking: false,
    heroImage: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    sources: [
      { id: 'bbc-bangla', name: 'BBC Bangla', originalHeadline: 'তেলের দাম কমল বিশ্ববাজারে' }
    ],
    primarySource: 'BBC Bangla'
  }
];

export const breakingNews = '🔴 BREAKING: ঢাকায় নতুন পরিবহন ব্যবস্থা চালুর ঘোষণা, আগামীকাল থেকে কার্যকর।';
