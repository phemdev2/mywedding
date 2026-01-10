// Change SongEntry to Hymn
import { ProgramItem, Hymn, Reading, GalleryImage } from '@/types'; // [!code ++]


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
  { title: "Gospel Acclamation", subtitle: "Ancient Words" },
  { title: "Rite of Marriage", subtitle: "Exchange of Vows & Blessing of Rings" },
  { title: "Prayer of the Faithful", subtitle: "Intercessions for Vicky & Ope" },
  { title: "Offertory", subtitle: "Songs: Kabiyesi O, Baba Gbore Wa" },
  { title: "Liturgy of the Eucharist", subtitle: "Sanctus: Sanctus De Libera" },
  { title: "Communion", subtitle: "Songs: Bofi, Take Me Deeper In Love" },
  { title: "Dismissal", subtitle: "Song: How Excellent" }
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

export const WEDDING_SONGS: SongEntry[] = [
  {
    id: "hymn-1",
    category: "Entrance Procession",
    title: "What a Joyful Day",
    type: "song",
    verses: [
      "CHORUS:\nWhat a joyful day, a day I do the Lord\nA joyful day we are happy and glad\n\nRefrain: a joyful day we are happy and glad",
      "1. Rejoice in the lord ye children of the lord. REF\n2. Arise and praise him who made earth and heaven. REF\n3. Enter his temple and sing him your praises. REF",
      "4. The Lord is so good, He’s good to his people. REF\n5. Uncountable praises we give to the father. REF"
    ]
  },
  {
    id: "hymn-2",
    category: "Post Gospel",
    title: "Ancient Words",
    type: "song",
    verses: [
      "Holy words long preserved for our walk in this world,\nThey resound with God's own heart\nOh, let the Ancient words impart.",
      "Words of Life, words of Hope\nGive us strength, help us cope\nIn this world, where e'er we roam\nAncient words will guide us Home.",
      "Ancient words ever true\nChanging me, and changing you.\nWe have come with open hearts\nOh let the ancient words impart."
    ]
  },
  {
    id: 'prayer-faithful',
    category: 'Prayer of the Faithful',
    title: 'Intercessions',
    type: 'liturgy',
    verses: [
      "That they may love one another we pray oh Lord\nThat they may live in peace and harmony\nThat they may see their children’s children\n\nVicky and Ope"
    ]
  },
  {
    id: 'offertory-kabiyesi',
    category: 'Offertory',
    title: 'Kabiyesi O',
    type: 'song',
    verses: [
      "Verse 1.\nKabiyesi o Hosanna o\nEyin Jesu kristi Oba Aiku",
      "CHORUS:\nE gbe ga Eyin Jesu o\nEyin Jesu Krist oba Aiku",
      "VERSE 2-5:\nWa Ka yin Jesu Ara mi o...\nOba yin jinde o Egbe mi o...\nWa gbope wa wa gba yin awa ono re...\nWa Juba Jesu Egbe mi o...\nAngeli lorun eba wa yin"
    ]
  },
  {
    id: 'offertory-gbore',
    category: 'Offertory',
    title: 'Baba Gbore Wa',
    type: 'song',
    verses: [
      "CHORUS:\nGbore wa o, Gbore wa o\nEledumare awa sope\nFun ore ofe re ninu aye wa\nBaba Adupe o\nGbore ti a muwa eledumare",
      "VERSE 1:\nOpe, iyin, ogo la mu wa\nSi waju re\nIjo, ilu at’orin la mu wa\nSi waju re\n\nBaba loke (2x)\nTewo gbope wa (2x)\nBaba loke (2x)\nGbore ti amuwa Eledumare"
    ]
  },
  {
    id: 'sanctus',
    category: 'Sanctus',
    title: 'Sanctus De Libera',
    type: 'song',
    verses: [
      "Sanctus, Sanctus, Sanctus (2x)\n\nSanctus dominus deus sabaoth\nPleni sunct caeli Et terra gloria\nSanctus dominus deus sabaoth\nPleni sunct cæli gloria",
      "Hosanna (2x) In excelsis",
      "Benedictus Benedictus qui venit\nIn nomine Benedictus\nIn nomine domini\n\nHosanna (2x) In excelsis"
    ]
  },
  {
    id: 'communion-bofi',
    category: 'Communion',
    title: 'Bofi',
    type: 'song',
    verses: [
      "VERSE 1:\nKimesese bofi bofida fagha akpor yerin\nfagha akpor yerin o\nKime sese bofi tamara ngo fi\nDa fagha fagha\nAkpor yerin mo",
      "REFRAIN:\nTamara nyi fi o\nTamara sin bouo o\nBouo (3x)\nFio bouo o\nDa fagha fagha\nAkpor yerin o"
    ]
  },
  {
    id: "hymn-3",
    category: "Communion",
    title: "Take Me Deeper In Love",
    type: "song",
    verses: [
      "CHORUS:\nTake me (take me) deeper in Love with you Jesus\nTake me Deeper in Love\nHold me (hold me) Closer in Love with you Jesus\nHold me Closer in Love with you.",
      "1. Lord there is a longing only you can fill\nA raging tempest only you can still\nMy soul is thirsting for you my God\nGod quench my thirst\nLord feed my soul",
      "2. Yes from sunrise to sunrise I seek your face\nFrom day to day I long for your touch\nTo hold my hand Lord lest I fall\nTo draw me nearer, closer to thee"
    ]
  },
  {
    id: 'dismissal',
    category: 'Dismissal',
    title: 'How Excellent',
    type: 'song',
    verses: [
      "How excellent how excellent\nIs thy loving kindness\nIs thy loving kindness O God",
      "Therefore the children of men\nPut their trust\nUnder the shadow of thy wings",
      "They shall be abundantly satisfied\nWith the fullness of thy home\nAnd thou shall make them drink of\nthe river of thy pleasure"
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