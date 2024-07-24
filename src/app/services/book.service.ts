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
        id: 19,
        name: "Thrawn Ascendancy: Greater Good",
        fileName: "greater good.jpg",
        appleLink: "",
        amazonLink: "https://smile.amazon.com/dp/1529101921",
        googlePlayLink: "https://play.google.com/store/books/details?id=OdMAEAAAQBAJ",
        pros: "As usual, the space battles are amazing. Thrawn's tactical analysis of war and his enemy is as good as ever here, and that alone makes this a must read. Each winding path and story told in the book concludes in a very satisfying way. How this book fits into the overall timeline is also very satisfying, and the ending of this book saved it greatly for me. I think my favorite thing to come of this new Thrawn trilogy is the world building and lore around the Chiss families. This was something I grew to love and understand, and the breadth of political and non-political decision making based on family was very well done.",
        cons: "This book focuses less on Thrawn and more on the overall situation that the Chaos is in, which isn't a bad thing. The secondary characters are still very interesting. This book does feel like Thrawn is making a lot of guesses rather than decisions based on certainty and analysis, as he would in other books. Even though I loved the family politics in this book, it was difficult to keep up with everyone's allegiances, something I'm sure would be better with a second reading."
      },
      {
        id: 20,
        name: "The Rising Storm",
        fileName: "The Rising Storm.jpg",
        appleLink: "",
        amazonLink: "https://smile.amazon.com/dp/0593159411",
        googlePlayLink: "https://play.google.com/store/books/details?id=hmQBEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 17,
        name: "Alphabet Squadron: Shadow Fall",
        fileName: "shadow fall.jpg",
        appleLink: "",
        amazonLink: "https://www.amazon.com/dp/1984820044",
        googlePlayLink: "https://play.google.com/store/books/details?id=58WyDwAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 21,
        name: "Phasma",
        fileName: "phasma.jpg",
        appleLink: "",
        amazonLink: "https://smile.amazon.com/dp/1524796336",
        googlePlayLink: "https://play.google.com/store/books/details?id=48WtDgAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 22,
        name: "Thrawn Ascendancy: Lesser Evil",
        fileName: "lesser evil.jpg",
        appleLink: "",
        amazonLink: "https://www.amazon.com/dp/0593158326",
        googlePlayLink: "https://play.google.com/store/books/details?id=bWIkEAAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 23,
        name: "Battlefront II: Inferno Squad",
        fileName: "inferno squad.jpg",
        appleLink: "",
        amazonLink: "https://amazon.com/dp/1524796808",
        googlePlayLink: "https://play.google.com/store/books/details?id=1QYEDgAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 24,
        name: "Dark Disciple",
        fileName: "dark disciple.jpg",
        appleLink: "",
        amazonLink: "https://amazon.com/dp/0345511530",
        googlePlayLink: "https://play.google.com/store/books/details?id=qSdsBQAAQBAJ",
        pros: "",
        cons: ""
      },
      {
        id: 25,
        name: "Queen's Peril",
        fileName: "queens peril.jpg",
        appleLink: "",
        amazonLink: "https://amazon.com/dp/1368057144",
        googlePlayLink: "https://play.google.com/store/books/details?id=M5XUDwAAQBAJ",
        pros: "",
        cons: ""
      },
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
