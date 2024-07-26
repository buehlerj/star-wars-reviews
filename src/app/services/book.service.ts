import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private listOfBooks: Book[];

  public setListOfBooks(newBooks: Book[]) {
    this.listOfBooks = newBooks;
  }

  public getListOfBooks(): Book[] {
    return this.listOfBooks;
  }

  public getInProgressBooks(): Book[] {
    return [
      {
        id: 20,
        name: "The Rising Storm",
        fileName: "The Rising Storm.jpg",
        appleLink: "",
        amazonLink: "0593159411",
        googlePlayLink: "hmQBEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 17,
        name: "Alphabet Squadron: Shadow Fall",
        fileName: "shadow fall.jpg",
        appleLink: "",
        amazonLink: "1984820044",
        googlePlayLink: "58WyDwAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 22,
        name: "Thrawn Ascendancy: Lesser Evil",
        fileName: "lesser evil.jpg",
        appleLink: "",
        amazonLink: "0593158326",
        googlePlayLink: "bWIkEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 23,
        name: "Battlefront II: Inferno Squad",
        fileName: "inferno squad.jpg",
        appleLink: "",
        amazonLink: "1524796808",
        googlePlayLink: "1QYEDgAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 24,
        name: "Dark Disciple",
        fileName: "dark disciple.jpg",
        appleLink: "",
        amazonLink: "0345511530",
        googlePlayLink: "qSdsBQAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 25,
        name: "Queen's Peril",
        fileName: "queens peril.jpg",
        appleLink: "",
        amazonLink: "1368057144",
        googlePlayLink: "M5XUDwAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 26,
        name: "Jedi: Battle Scars",
        fileName: "jedi battle scars.jpg",
        appleLink: "",
        amazonLink: "0593598601",
        googlePlayLink: "eOZzEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 27,
        name: "Bloodline",
        fileName: "bloodline.jpg",
        appleLink: "",
        amazonLink: "0425286789",
        googlePlayLink: "IaXSCQAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 28,
        name: "Midnight Horizons",
        fileName: "Midnight Horizons.jpg",
        appleLink: "",
        amazonLink: "1368060676",
        googlePlayLink: "BjdVEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 29,
        name: "Shadow of the Sith",
        fileName: "Shadow of the Sith.jpg",
        appleLink: "",
        amazonLink: "0593358600",
        googlePlayLink: "BNBFEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 30,
        name: "Brotherhood",
        fileName: "Brotherhood.jpg",
        appleLink: "",
        amazonLink: "0593358570",
        googlePlayLink: "MDY_EAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 31,
        name: "Rogue One: A Star Wars Story",
        fileName: "Rogue One A Star Wars Story.jpg",
        appleLink: "",
        amazonLink: "0399178473",
        googlePlayLink: "25n9CwAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 32,
        name: "The Fallen Star",
        fileName: "The Fallen Star.jpg",
        appleLink: "",
        amazonLink: "0593355393",
        googlePlayLink: "hV45EAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 33,
        name: "Tempest Runner",
        fileName: "Tempest Runner.jpg",
        appleLink: "",
        amazonLink: "0593358996",
        googlePlayLink: "Neg6EAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 34,
        name: "Path of Deceit",
        fileName: "Path of Deceit.jpg",
        appleLink: "",
        amazonLink: "1368076122",
        googlePlayLink: "KX56EAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 35,
        name: "The Battle of Jedha",
        fileName: "The Battle of Jedha.jpg",
        appleLink: "",
        amazonLink: "0593597893",
        googlePlayLink: "6MpvEAAAQBAJ",
        pros: "",
        cons: ""
      }
    ];
  }

  public getInQueueBooks(): Book[] {
    return [
      {
        id: 19,
        name: "Queen's Hope",
        fileName: "",
        amazonLink: "",
        googlePlayLink: "",
        pros: "",
        cons: ""
      }
    ];
  }
}
