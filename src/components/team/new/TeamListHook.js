import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import _ from 'lodash';

const mainStaff = [
  {
    first: 'Angel',
    last: 'Lacret',
    description: 'Chief of Product Development',
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/angel.jpg'}
      />
    ),
  },
  {
    first: 'Alan',
    last: 'R. Guevara',
    description: 'Chief of Product Management',
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/alanthinks.jpg'}
      />
    ),
  },
  {
    first: 'Jacqueline',
    last: 'Popovich',
    description: 'Product Manager',
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/jacqueline-popovich.jpg'}
      />
    ),
  },
  {
    first: 'Ryan',
    last: 'Seron',
    description: 'Director, Business Development - Software',
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/ryan-seron.jpg'}
      />
    ),
  },
  {
    first: 'Miguel',
    last: 'Muir',
    description: 'Enterprise Business Development Manage',
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Miguel-Muir.jpg'}
      />
    ),
  },
];

const staff = [
  {
    first: 'Alessandra',
    last: 'Lubertino',
    description: 'Growth and Strategic Partnerships Executive',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/alessandra-brusut.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/alessandra-brusut.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/alessandra-brusut.jpg'}
      />
    ),
  },
  {
    first: 'Alexander',
    last: 'Romero',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Alexander-Romero.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Alexander-Romero.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Alexander-Romero.jpg'}
      />
    ),
  },
  {
    first: 'Aracelis',
    last: 'Acosta',
    description: 'Administrator',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/araceli.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/araceli.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/araceli.jpg'}
      />
    ),
  },
  {
    first: 'Anjelys',
    last: 'Leal',
    description: 'QA Analyst',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/anjelys-leal.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/anjelys-leal.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/anjelys-leal.jpg'}
      />
    ),
  },
  {
    first: 'Carlos',
    last: 'Hurtado',
    description: 'Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/carlos-hurtado.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/carlos-hurtado.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/carlos-hurtado.jpg'}
      />
    ),
  },
  {
    first: 'Carlos',
    last: 'Magno',
    description: 'Project Manager',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/carlos-magno.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
      />
    ),
  },
  {
    first: 'Carolina',
    last: 'Barcelo',
    description: 'Content Writer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/carolina-barcelo.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/carolina-barcelo.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/carolina-barcelo.jpg'}
      />
    ),
  },
  {
    first: 'Cesar',
    last: 'Morales',
    description: 'QA Analyst',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/cesar-morales.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/cesar-morales.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/cesar-morales.jpg'}
      />
    ),
  },
  {
    first: 'Cristian',
    last: 'Caraballo',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/cristian-caraballo.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/cristian-caraballo.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/cristian-caraballo.jpg'}
      />
    ),
  },
  {
    first: 'Dany',
    last: 'Lima',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/leonel-lima.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/leonel-lima.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/leonel-lima.jpg'}
      />
    ),
  },
  {
    first: 'Edgar',
    last: 'Espinetti',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
      />
    ),
  },
  {
    first: 'Eduardo',
    last: 'Marquez',
    description: 'Full Stack Javascript',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
      />
    ),
  },
  {
    first: 'Ernesto',
    last: 'Morales',
    description: 'UI/UX Designer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={
          './../../../assets/images/team/new-pictures/green/Ernesto-Morales-UX-UI-Designer-v.jpg'
        }
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={
          './../../../assets/images/team/new-pictures/green/Ernesto-Morales-UX-UI-Designer-v.jpg'
        }
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={
          './../../../assets/images/team/new-pictures/green/Ernesto-Morales-UX-UI-Designer-v.jpg'
        }
      />
    ),
  },
  {
    first: 'Fabricio',
    last: 'Rojas',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/fabricio-rojas.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/fabricio-rojas.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/fabricio-rojas.jpg'}
      />
    ),
  },
  {
    first: 'Gerardo',
    last: 'Garcia',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/gerardo-garcia.jpeg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/gerardo-garcia.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/gerardo-garcia.jpeg'}
      />
    ),
  },
  {
    first: 'Gian',
    last: 'Leguizamo',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/gian-lucas-leguizamo.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/gian-lucas-leguizamo.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/gian-lucas-leguizamo.jpg'}
      />
    ),
  },
  {
    first: 'Hector',
    last: 'Vázquez',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/hector-vasquez.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/hector-vasquez.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/hector-vasquez.jpg'}
      />
    ),
  },
  {
    first: 'Jesus',
    last: 'Lopez',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/jesus-lopez.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/jesus-lopez.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/jesus-lopez.jpg'}
      />
    ),
  },
  {
    first: 'Jesus',
    last: 'Rodriguez',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
      />
    ),
  },
  {
    first: 'Jorman',
    last: 'Garcia',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/jorman-garcia.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/jorman-garcia.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/jorman-garcia.jpg'}
      />
    ),
  },
  {
    first: 'Kevin',
    last: 'Hernandez',
    description: 'Chief Finantial Officer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/kevin.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/kevin.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/kevin.jpg'}
      />
    ),
  },
  {
    first: 'Kristal',
    last: 'Dorta',
    description: 'UI/UX Designer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/kristal-dorta.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/kristal-dorta.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/kristal-dorta.jpg'}
      />
    ),
  },
  {
    first: 'Leonardo',
    last: 'Sciretta',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/leonardo-sciretta.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/leonardo-sciretta.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/leonardo-sciretta.jpg'}
      />
    ),
  },
  {
    first: 'Luis',
    last: 'Eulacio',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
      />
    ),
  },
  {
    first: 'Luis',
    last: 'Leopardi',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/luis-leopardi.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/luis-leopardi.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/luis-leopardi.jpg'}
      />
    ),
  },
  {
    first: 'Luis',
    last: 'Olivares',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/luis-olivares.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/luis-olivares.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/luis-olivares.jpg'}
      />
    ),
  },
  {
    first: 'Maite',
    last: 'Quijada',
    description: 'Content Writer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/maite-quijada.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/maite-quijada.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/maite-quijada.jpg'}
      />
    ),
  },
  {
    first: 'Maria',
    last: 'Moya',
    description: 'Marketing Coordinator',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
      />
    ),
  },
  {
    first: 'Mariana',
    last: 'Balzan',
    description: 'Community Manager',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
      />
    ),
  },
  {
    first: 'Mayela',
    last: 'Marin',
    description: 'Project Manager',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/mayela-marin.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/mayela-marin.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/mayela-marin.jpg'}
      />
    ),
  },
  {
    first: 'Paul',
    last: 'Salazar',
    description: 'Business Development',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/paul-salazar.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/paul-salazar.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/paul-salazar.jpg'}
      />
    ),
  },
  {
    first: 'Rossileydys',
    last: 'Silva',
    description: 'QA Analyst',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/rossileydys-silva.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/rossileydys-silva.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/rossileydys-silva.jpg'}
      />
    ),
  },
  {
    first: 'Sebastian',
    last: 'Muchut',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/sebastian-muchut.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/sebastian-muchut.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/sebastian-muchut.jpg'}
      />
    ),
  },
  {
    first: 'Thiago',
    last: 'Gallo',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/thiago.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/thiago.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/thiago.jpg'}
      />
    ),
  },
  {
    first: 'Yanisel',
    last: 'Barreto',
    description: 'Chief of Staff',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
      />
    ),
  },
  {
    first: 'Diana',
    last: 'Sandoval',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Diana-Sandoval----Developer-b.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/Diana-Sandoval----Developer-v.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Diana-Sandoval----Developer-b.jpg'}
      />
    ),
  },
  {
    first: 'Enzo',
    last: 'Nadales',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Enzo-Nadales---Developer-b.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/Enzo-Nadales---Developer-v.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Enzo-Nadales---Developer-b.jpg'}
      />
    ),
  },
  {
    first: 'Francisco',
    last: 'Maneiro',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Francisco-Maneiro--Developer-b.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/Francisco-Maneiro--Developer-v.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Francisco-Maneiro--Developer-b.jpg'}
      />
    ),
  },
  {
    first: 'Manuel',
    last: 'Cortina',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Manuel-Cortina--Developer-b.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/Manuel-Cortina--Developer-v.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Manuel-Cortina--Developer-b.jpg'}
      />
    ),
  },
  {
    first: 'Manuel',
    last: 'Puente',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Manuel-Puente---Developer-b.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/Manuel-Puente---Developer-v.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Manuel-Puente---Developer-b.jpg'}
      />
    ),
  },
  {
    first: 'Richar',
    last: 'Pupo',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Richar-Pupo---Developer-b.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/Richar-Pupo---Developer-v.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Richar-Pupo---Developer-b.jpg'}
      />
    ),
  },

  {
    first: 'Xavier',
    last: 'Romero',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Xavier-Romero-Developer-b.jpg'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/green/Xavier-Romero-Developer-v.jpg'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../../assets/images/team/new-pictures/white/Xavier-Romero-Developer-b.jpg'}
      />
    ),
  },
];

const useTeamList = () => {
  // Alphabetical order
  const data = _.sortBy(
    staff,
    [(value) => `${value.first.toLowerCase()} ${value.last.toLowerCase()}`],
    ['desc'],
  );

  return {
    data,
  };
};

export { mainStaff, staff, useTeamList };
