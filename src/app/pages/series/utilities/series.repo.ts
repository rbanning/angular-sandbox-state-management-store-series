import { ExampleSimpleListDetailComponent, ExampleUserProfileThroughOutComponent } from "../examples";
import { ISeriesItem } from "./series.interface";

export const data: ISeriesItem[] = [
  {
    id: 1,
    title: 'Getting Started',
    snippet: 'Overview of the problem that we are trying to solve',
    description: [
      'In this initial part of the series, we examine the problem that we are trying to solve.',
      'Often in an application, we retrieve data from a remote source and need to use that data in multiple places within the app.  The problem is in a very basic setup, we make separate calls to the remote API each time we use this data.',
      'The examples provided show various places where these extra remote API slow our app.'
    ],
    pages: [
      { id: 'simple-list-detail', title: 'Simple List/Detail Example', component: ExampleSimpleListDetailComponent  },
      { id: 'user-profile-through-out', title: 'Using User Profile Though Out a Page', component: ExampleUserProfileThroughOutComponent }
    ],
    image: {
      src: "/assets/series/1-getting-started.martin-sanchez.unsplash.jpg",
      alt: 'fall leaves',
      credit: "Martin Sanchez",
      creditLink: "https://unsplash.com/@zekedrone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    }
  },
  {
    id: 2,
    title: 'Simple Caching',
    snippet: 'Exploring some simple ways of caching the remote data',
    description: [

    ],
    pages: [],
    image: {
      src: "/assets/series/2-simple-caching.lia-trvarthen.unsplash.jpg",
      alt: 'storage box',
      credit: "Lia Trevarthen",
      creditLink: "https://unsplash.com/@melodi2?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    }
  },
]