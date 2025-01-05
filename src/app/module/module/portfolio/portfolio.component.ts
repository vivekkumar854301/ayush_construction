import { Component, signal } from '@angular/core';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  completionDate: string;
}

@Component({
  selector: 'ayush-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  private projects: Project[] = [
    {
      id: 1,
      title: "Modern Family Home",
      category: "Residential",
      image: "../../../../assets/image/home.jpg",
      description: "A contemporary 4-bedroom family home with open-plan living areas and energy-efficient features.",
      location: "Suburb City, State",
      completionDate: "June 2022",
    },
    {
      id: 2,
      title: "City Center Office Complex",
      category: "Commercial",
      image: "../../../../assets/image/CityCenterOfficeComplex.jpg",
      description: "A state-of-the-art office complex featuring smart building technology and sustainable design.",
      location: "Downtown, Major City",
      completionDate: "March 2023",
    },
    {
      id: 3,
      title: "Automated Manufacturing Facility",
      category: "Industrial",
      image: "../../../../assets/image/Automated_Manufacturing_Facility.jpg",
      description: "A cutting-edge manufacturing facility with advanced automation and robotics integration.",
      location: "Industrial Park, State",
      completionDate: "November 2022",
    },
  ];

  categories = ['All', 'Residential', 'Commercial', 'Industrial'];
  filter = signal('All');

  filteredProjects = signal(this.projects);

  setFilter(category: string) {
    this.filter.set(category);
    this.filteredProjects.set(
      category === 'All'
        ? this.projects
        : this.projects.filter((project) => project.category === category)
    );
  }
}
