export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "hipster-ipsum",
    title: "Hipster Ipsum",
    content:
      "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.",
  },
  {
    id: 2,
    slug: "zombie-ipsum",
    title: "Zombie Ipsum",
    content:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?",
  },
  {
    id: 3,
    slug: "bacon-ipsum",
    title: "Bacon Ipsum",
    content:
      "Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner.",
  },
];
