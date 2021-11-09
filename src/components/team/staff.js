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
        src={'./../../assets/images/team/team-pictures/angel.jpg'}
        alt={'Angel Lacret'}
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
        src={'./../../assets/images/team/team-pictures/alanthinks.jpg'}
        alt={'Alan R. Guevara'}
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
        src={'./../../assets/images/team/team-pictures/jacqueline-popovich.jpg'}
        alt={'Jacqueline Popovich'}
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
        src={'./../../assets/images/team/new-pictures/green/ryan-seron.jpg'}
        alt={'Ryan Seron'}
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
        src={'./../../assets/images/team/team-pictures/Miguel-Muir.jpg'}
        alt={'Miguel Muir'}
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
        src={'./../../assets/images/team/new-pictures/white/alessandra-brusut.jpg'}
        alt={'Alessandra Lubertino'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/alessandra-brusut.jpg'}
        alt={'Alessandra Lubertino'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/alessandra-brusut.jpg'}
        alt={'Alessandra Lubertino'}
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
        src={'./../../assets/images/team/new-pictures/white/Alexander-Romero.jpg'}
        alt={'Alexander Romero'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Alexander-Romero.jpg'}
        alt={'Alexander Romero'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Alexander-Romero.jpg'}
        alt={'Alexander Romero'}
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
        src={'./../../assets/images/team/team-pictures/araceli.jpg'}
        alt={'Aracelis Acosta'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/araceli.jpg'}
        alt={'Aracelis Acosta'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/araceli.jpg'}
        alt={'Aracelis Acosta'}
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
        src={'./../../assets/images/team/new-pictures/white/anjelys-leal.jpg'}
        alt={'Anjelys Leal'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/anjelys-leal.jpg'}
        alt={'Anjelys Leal'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/anjelys-leal.jpg'}
        alt={'Anjelys Leal'}
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
        src={'./../../assets/images/team/new-pictures/white/carlos-hurtado.jpg'}
        alt={'Carlos Hurtado'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carlos-hurtado.jpg'}
        alt={'Carlos Hurtado'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carlos-hurtado.jpg'}
        alt={'Carlos Hurtado'}
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
        src={'./../../assets/images/team/new-pictures/white/carlos-magno.jpg'}
        alt={'Carlos Magno'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
        alt={'Carlos Magno'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
        alt={'Carlos Magno'}
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
        src={'./../../assets/images/team/new-pictures/white/carolina-barcelo.jpg'}
        alt={'Carolina Barcelo'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carolina-barcelo.jpg'}
        alt={'Carolina Barcelo'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carolina-barcelo.jpg'}
        alt={'Carolina Barcelo'}
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
        src={'./../../assets/images/team/new-pictures/white/cesar-morales.jpg'}
        alt={'Cesar Morales'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/cesar-morales.jpg'}
        alt={'Cesar Morales'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/cesar-morales.jpg'}
        alt={'Cesar Morales'}
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
        src={'./../../assets/images/team/new-pictures/white/cristian-caraballo.jpg'}
        alt={'Cristian Caraballo'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/cristian-caraballo.jpg'}
        alt={'Cristian Caraballo'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/cristian-caraballo.jpg'}
        alt={'Cristian Caraballo'}
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
        src={'./../../assets/images/team/new-pictures/white/leonel-lima.jpg'}
        alt={'Dany Lima'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/leonel-lima.jpg'}
        alt={'Dany Lima'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/leonel-lima.jpg'}
        alt={'Dany Lima'}
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
        src={'./../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
        alt={'Edgar Espinetti'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
        alt={'Edgar Espinetti'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
        alt={'Edgar Espinetti'}
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
        src={'./../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
        alt={'Eduardo Marquez'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
        alt={'Eduardo Marquez'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
        alt={'Eduardo Marquez'}
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
        src={'./../../assets/images/team/new-pictures/green/Ernesto-Morales-UX-UI-Designer-v.jpg'}
        alt={'Ernesto Morales'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Ernesto-Morales-UX-UI-Designer-v.jpg'}
        alt={'Ernesto Morales'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Ernesto-Morales-UX-UI-Designer-v.jpg'}
        alt={'Ernesto Morales'}
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
        src={'./../../assets/images/team/new-pictures/white/fabricio-rojas.jpg'}
        alt={'Fabricio Rojas'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/fabricio-rojas.jpg'}
        alt={'Fabricio Rojas'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/fabricio-rojas.jpg'}
        alt={'Fabricio Rojas'}
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
        src={'./../../assets/images/team/new-pictures/white/gerardo-garcia.jpeg'}
        alt={'Gerardo Garcia'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/gerardo-garcia.jpg'}
        alt={'Gerardo Garcia'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/gerardo-garcia.jpeg'}
        alt={'Gerardo Garcia'}
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
        src={'./../../assets/images/team/new-pictures/white/gian-lucas-leguizamo.jpg'}
        alt={'Gian Leguizamo'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/gian-lucas-leguizamo.jpg'}
        alt={'Gian Leguizamo'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/gian-lucas-leguizamo.jpg'}
        alt={'Gian Leguizamo'}
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
        src={'./../../assets/images/team/new-pictures/white/hector-vasquez.jpg'}
        alt={'Hector Vázquez'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/hector-vasquez.jpg'}
        alt={'Hector Vázquez'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/hector-vasquez.jpg'}
        alt={'Hector Vázquez'}
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
        src={'./../../assets/images/team/new-pictures/white/jesus-lopez.jpg'}
        alt={'Jesus Lopez'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/jesus-lopez.jpg'}
        alt={'Jesus Lopez'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/jesus-lopez.jpg'}
        alt={'Jesus Lopez'}
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
        src={'./../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
        alt={'Jesus Rodriguez'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
        alt={'Jesus Rodriguez'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
        alt={'Jesus Rodriguez'}
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
        src={'./../../assets/images/team/new-pictures/green/jorman-garcia.jpg'}
        alt={'Jorman Garcia'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/jorman-garcia.jpg'}
        alt={'Jorman Garcia'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/jorman-garcia.jpg'}
        alt={'Jorman Garcia'}
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
        src={'./../../assets/images/team/team-pictures/kevin.jpg'}
        alt={'Kevin Hernandez'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/kevin.jpg'}
        alt={'Kevin Hernandez'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/kevin.jpg'}
        alt={'Kevin Hernandez'}
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
        src={'./../../assets/images/team/new-pictures/white/kristal-dorta.jpg'}
        alt={'Kristal Dorta'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/kristal-dorta.jpg'}
        alt={'Kristal Dorta'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/kristal-dorta.jpg'}
        alt={'Kristal Dorta'}
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
        src={'./../../assets/images/team/new-pictures/green/leonardo-sciretta.jpg'}
        alt={'Leonardo Sciretta'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/leonardo-sciretta.jpg'}
        alt={'Leonardo Sciretta'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/leonardo-sciretta.jpg'}
        alt={'Leonardo Sciretta'}
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
        src={'./../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
        alt={'Luis Eulacio'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
        alt={'Luis Eulacio'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
        alt={'Luis Eulacio'}
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
        src={'./../../assets/images/team/new-pictures/white/luis-leopardi.jpg'}
        alt={'Luis Leopardi'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/luis-leopardi.jpg'}
        alt={'Luis Leopardi'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/luis-leopardi.jpg'}
        alt={'Luis Leopardi'}
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
        src={'./../../assets/images/team/new-pictures/white/luis-olivares.jpg'}
        alt={'Luis Olivares'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/luis-olivares.jpg'}
        alt={'Luis Olivares'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/luis-olivares.jpg'}
        alt={'Luis Olivares'}
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
        src={'./../../assets/images/team/new-pictures/white/maite-quijada.jpg'}
        alt={'Maite Quijada'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/maite-quijada.jpg'}
        alt={'Maite Quijada'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/maite-quijada.jpg'}
        alt={'Maite Quijada'}
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
        src={'./../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
        alt={'Maria Moya'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
        alt={'Maria Moya'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
        alt={'Maria Moya'}
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
        src={'./../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
        alt={'Mariana Balzan'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
        alt={'Mariana Balzan'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
        alt={'Mariana Balzan'}
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
        src={'./../../assets/images/team/new-pictures/white/mayela-marin.jpg'}
        alt={'Mayela Marin'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/mayela-marin.jpg'}
        alt={'Mayela Marin'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/mayela-marin.jpg'}
        alt={'Mayela Marin'}
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
        src={'./../../assets/images/team/team-pictures/paul-salazar.jpg'}
        alt={'Paul Salazar'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/paul-salazar.jpg'}
        alt={'Paul Salazar'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/paul-salazar.jpg'}
        alt={'Paul Salazar'}
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
        src={'./../../assets/images/team/new-pictures/white/rossileydys-silva.jpg'}
        alt={'Rossileydys Silva'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/rossileydys-silva.jpg'}
        alt={'Rossileydys Silva'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/rossileydys-silva.jpg'}
        alt={'Rossileydys Silva'}
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
        src={'./../../assets/images/team/new-pictures/white/sebastian-muchut.jpg'}
        alt={'Sebastian Muchut'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/sebastian-muchut.jpg'}
        alt={'Sebastian Muchut'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/sebastian-muchut.jpg'}
        alt={'Sebastian Muchut'}
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
        src={'./../../assets/images/team/new-pictures/white/thiago.jpg'}
        alt={'Thiago Gallo'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/thiago.jpg'}
        alt={'Thiago Gallo'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/thiago.jpg'}
        alt={'Thiago Gallo'}
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
        src={'./../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
        alt={'Yanisel Barreto'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
        alt={'Yanisel Barreto'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
        alt={'Yanisel Barreto'}
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
        src={'./../../assets/images/team/new-pictures/white/Diana-Sandoval----Developer-b.jpg'}
        alt={'Diana Sandoval'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Diana-Sandoval----Developer-v.jpg'}
        alt={'Diana Sandoval'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Diana-Sandoval----Developer-b.jpg'}
        alt={'Diana Sandoval'}
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
        src={'./../../assets/images/team/new-pictures/white/Enzo-Nadales---Developer-b.jpg'}
        alt={'Enzo Nadales'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Enzo-Nadales---Developer-v.jpg'}
        alt={'Enzo Nadales'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Enzo-Nadales---Developer-b.jpg'}
        alt={'Enzo Nadales'}
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
        src={'./../../assets/images/team/new-pictures/white/Francisco-Maneiro--Developer-b.jpg'}
        alt={'Francisco Maneiro'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Francisco-Maneiro--Developer-v.jpg'}
        alt={'Francisco Maneiro'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Francisco-Maneiro--Developer-b.jpg'}
        alt={'Francisco Maneiro'}
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
        src={'./../../assets/images/team/new-pictures/white/Manuel-Cortina--Developer-b.jpg'}
        alt={'Manuel Cortina'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Manuel-Cortina--Developer-v.jpg'}
        alt={'Manuel Cortina'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Manuel-Cortina--Developer-b.jpg'}
        alt={'Manuel Cortina'}
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
        src={'./../../assets/images/team/new-pictures/white/Manuel-Puente---Developer-b.jpg'}
        alt={'Manuel Puente'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Manuel-Puente---Developer-v.jpg'}
        alt={'Manuel Puente'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Manuel-Puente---Developer-b.jpg'}
        alt={'Manuel Puente'}
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
        src={'./../../assets/images/team/new-pictures/white/Richar-Pupo---Developer-b.jpg'}
        alt={'Richar Pupo'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Richar-Pupo---Developer-v.jpg'}
        alt={'Richar Pupo'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Richar-Pupo---Developer-b.jpg'}
        alt={'Richar Pupo'}
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
        src={'./../../assets/images/team/new-pictures/white/Xavier-Romero-Developer-b.jpg'}
        alt={'Xavier Romero'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/Xavier-Romero-Developer-v.jpg'}
        alt={'Xavier Romero'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/Xavier-Romero-Developer-b.jpg'}
        alt={'Xavier Romero'}
      />
    ),
  },
];

const data = _.sortBy(
  staff,
  [(value) => `${value.first.toLowerCase()} ${value.last.toLowerCase()}`],
  ['desc'],
);

export { mainStaff, data as staff };
