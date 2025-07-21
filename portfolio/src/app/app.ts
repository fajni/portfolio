import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Scene } from "./scene/scene";
import { Loading } from "./loading/loading";
import { About } from './about/about';
import { Experience } from "./experience/experience";
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Scene, Loading, About, Experience, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');

  public isLoading: boolean = true;

  onComponentReady() {
    this.isLoading = false;
  }
}
