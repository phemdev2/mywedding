
import { ProgramItem, Hymn, Reading, GalleryImage } from './types';

export const WEDDING_DATE = "February 7, 2026";
export const VENUE_NAME = "Corpus Christi Catholic Church, Egbin, Ijede, Ikorodu, Lagos";
export const COUPLE_NAMES = "Victoria Isioma & Opeoluwa Habeeb";
export const HASHTAG = "#THEOVLOVESTORY";

export const PRIESTS = [
  "Rev. Fr. Paul Adegoriola, C.Ss.R",
  "Rev. Fr. Basil Agbom, C.Ss.R"
];

export const CHURCH_PROGRAM: ProgramItem[] = [
  { title: "Entrance Procession", subtitle: "Song: What a Joyful Day", time: "10:00 AM" },
  { title: "Liturgy of the Word", subtitle: "First & Second Readings" },
  { title: "Gospel Acclamation", subtitle: "1 John 4:12" },
  { title: "Gospel Reading", subtitle: "Matthew 19:3-6" },
  { title: "Rite of Marriage", subtitle: "Exchange of Vows & Blessing of Rings" },
  { title: "Offertory", subtitle: "Songs: Kabiyesi O, Baba Gbore Wa" },
  { title: "Liturgy of the Eucharist", subtitle: "Sanctus & Communion" },
  { title: "Dismissal", subtitle: "Concluding Rites" }
];

export const RECEPTION_PROGRAM: ProgramItem[] = [
  { title: "Introduction & Recognition", subtitle: "Special Guests" },
  { title: "Entrance of Families", subtitle: "Brides & Grooms Families" },
  { title: "Entrance of Bridal Party", subtitle: "Groomsmen & Bridesmaids" },
  { title: "Grand Entrance of Couple", subtitle: "Victoria & Opeoluwa" },
  { title: "Games & Interaction", subtitle: "With couple and friends" },
  { title: "Cutting of Cake", subtitle: "Celebratory Moment" },
  { title: "Couples First Dance", subtitle: "The Romantic Highlight" },
  { title: "Couple/Mother's Dance", subtitle: "Emotional Tribute" },
  { title: "Speeches and Toast", subtitle: "To a lasting union" },
  { title: "Vote of Thanks", subtitle: "Appreciation" },
  { title: "Party Continues", subtitle: "Dance and celebration" }
];

export const HYMNS: Hymn[] = [
  {
    id: "hymn-1",
    title: "What a Joyful Day",
    verses: [
      "What a joyful day, a day I do the Lord\nA joyful day we are happy and glad\n\nRefrain: a joyful day we are happy and glad",
      "Rejoice in the lord ye children of the lord. REF\nArise and praise him who made earth and heaven. REF\nEnter his temple and sing him your praises. REF",
      "The Lord is so good, He’s good to his people. REF\nUncountable praises we give to the father. REF"
    ]
  },
  {
    id: "hymn-2",
    title: "Ancient Words",
    verses: [
      "Holy words long preserved for our walk in this world,\nThey resound with God's own heart\nOh, let the Ancient words impart.",
      "Words of Life, words of Hope\nGive us strength, help us cope\nIn this world, where e'er we roam\nAncient words will guide us Home.",
      "Ancient words ever true\nChanging me, and changing you.\nWe have come with open hearts\nOh let the ancient words impart."
    ]
  },
  {
    id: "hymn-3",
    title: "Take Me Deeper In Love",
    verses: [
      "CHORUS:\nTake me (take me) deeper in\nLove with you Jesus\nTake me Deeper in Love\nHold me (hold me) Closer in\nLove with you Jesus\nHold me Closer in Love with you.",
      "Lord there is a longing only you can fill\nA raging tempest only you can still\nMy soul is thirsting for you my God\nGod quench my thirst\nLord feed my soul",
      "Yes from sunrise to sunrise I seek your face\nFrom day to day I long for your touch\nTo hold my hand Lord lest I fall\nTo draw me nearer, closer to thee"
    ]
  }
];

export const BIBLE_READINGS: Reading[] = [
  {
    reference: "Genesis 2: 18 - 24",
    reader: "First Reading",
    text: "The LORD God said: “It is not good that the man should be alone; I will make him a helper fit for him.” ... Therefore a man leaves his father and his mother and clings to his wife, and they become one flesh."
  },
  {
    reference: "1 Corinthians 13:4-8",
    reader: "Second Reading",
    text: "Love is patient, love is kind. It is not jealous or boastful, it is not arrogant or rude, Love does not insist on its own way, it is not irritable or resentful... Love never ends."
  },
  {
    reference: "Matthew 19: 3-6",
    reader: "Gospel Reading",
    text: "“What therefore God has joined together let no man put asunder.” At that time: Pharisees came up to Jesus and tested him by asking... He answered, “Have you not read that he who made them from the beginning made them male and female...”"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "/images/eva-opeyemi1.jpeg", caption: "Traditional Attire"},
  { url: "/images/eva-opeyemi2.jpeg", caption: "The Happy Couple" },
  { url: "/images/eva-opeyemi4.jpeg", caption: "Love in her Eyes" },
  { url: "/images/lovers.jpeg", caption: "Victoria & Opeoluwa" },
  { url: "/images/eva-opeyemi3.jpeg", caption: "Sweet Moments" },
  { url: "/images/love.jpeg", caption: "Victoria & Opeoluwa" },
  { url: "/images/lovestory.jpeg", caption: "His Queen" },
  { url: "/images/opeoluwa.jpeg", caption: "Victoria & Opeoluwa" },
];
