import React from 'react';
import { Column, Columns } from 'bloomer';
import styled from 'styled-components';

import Card from '../card/Card';
import { StaticImage } from 'gatsby-plugin-image';

const Container = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const TeamList = () => {
  return (
    <Container>
      <Columns isMultiline isMarginless>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Angel'} last={'Lacret'} description={'Chief of Product Development'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/angel.jpg'}
              alt="Angel Lacret"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Alan'} last={'R. Guevara'} description={'Chief of Product Management'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/alanthinks.jpg'}
              alt="Alan R. Guevara"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Jacqueline'} last={'Popovich'} description={'Product Manager'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/jacqueline-popovich.jpg'}
              alt="Jacqueline Popovich"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card
            first={'Ryan'}
            last={'Seron'}
            description={'Director, Business Development - Software'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/ryan-seron.jpg'}
              alt="Ryan Seron"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card
            first={'Miguel'}
            last={'Muir'}
            description={'Enterprise Business Development Manage'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Miguel-Muir.jpg'}
              alt="Miguel Muir"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card
            first={'Alessandra'}
            last={'Lubertino'}
            description={'Growth and Strategic Partnerships Executive'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/alessandra-brusut.jpg'}
              alt="Alessandra Lubertino"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Alexander'} last={'Romero'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Alexander-Romero.jpg'}
              alt="Alexander Romero"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Aracelis'} last={'Acosta'} description={'Administrator'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/araceli.jpg'}
              alt="Aracelis Acosta"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Anjelys'} last={'Leal'} description={'QA Analyst'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/anjelys-leal.jpg'}
              alt="Anjelys Leal"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Carlos'} last={'Hurtado'} description={'Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/carlos-hurtado.jpg'}
              alt="Carlos Hurtado"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Carlos'} last={'Magno'} description={'Project Manager'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
              alt="Carlos Magno"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Carolina'} last={'Barcelo'} description={'Content Writer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/carolina-barcelo.jpg'}
              alt="Carolina Barcelo"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Cesar'} last={'Morales'} description={'QA Analyst'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/cesar-morales.jpg'}
              alt="Cesar Morales"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card
            first={'Cristian'}
            last={'Caraballo'}
            description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/cristian-caraballo.jpg'}
              alt="Cristian Caraballo"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Dany'} last={'Lima'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/leonel-lima.jpg'}
              alt="Dany Leonel Lima"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Edgar'} last={'Espinetti'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
              alt="Edgar Espinetti"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Eduardo'} last={'Marquez'} description={'Full Stack Javascript'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
              alt="Eduardo Marquez"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Ernesto'} last={'Morales'} description={'UI/UX Designer'}>
            <StaticImage
              className={'team-member-img'}
              src={
                './../../../assets/images/team/new-pictures/green/Ernesto-Morales-UX-UI-Designer-v.jpg'
              }
              alt="Ernesto Morales"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Fabricio'} last={'Rojas'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/fabricio-rojas.jpg'}
              alt="Fabricio Rojas"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Gerardo'} last={'Garcia'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/gerardo-garcia.jpg'}
              alt="Gerardo Garcia"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card
            first={'Gian Lucas'}
            last={'Leguizamo'}
            description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/gian-lucas-leguizamo.jpg'}
              alt="Gian Lucas Leguizamo"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Hector'} last={'Vázquez'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/hector-vasquez.jpg'}
              alt="Hector Vazquez"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Jesus'} last={'Lopez'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/jesus-lopez.jpg'}
              alt="Jesus Lopez"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Jesus'} last={'Rodriguez'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
              alt="Jesus Rodriguez"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Jorman'} last={'Garcia'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/jorman-garcia.jpg'}
              alt="Jorman Garcia"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Kevin'} last={'Hernandez'} description={'Chief Finantial Officer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/kevin.jpg'}
              alt="Kevin Hernandez"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Kristal'} last={'Dorta'} description={'UI/UX Designer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/kristal-dorta.jpg'}
              alt="Kristal Dorta"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card
            first={'Leonardo'}
            last={'Sciretta'}
            description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/leonardo-sciretta.jpg'}
              alt="Leonardo Sciretta"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Luis'} last={'Eulacio'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
              alt="Luis Eulacio"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Luis'} last={'Leopardi'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/luis-leopardi.jpg'}
              alt="Luis Leopardio"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Luis'} last={'Olivares'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/luis-olivares.jpg'}
              alt="Luis Olivares"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Maite'} last={'Quijada'} description={'Content Writer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/maite-quijada.jpg'}
              alt="Maite Quijada"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Maria Gabriela'} last={'Moya'} description={'Marketing Coordinator'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
              alt="Maria Gabriela Moya"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Mariana'} last={'Balzan'} description={'Community Manager'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
              alt="Mariana Balzan"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Mayela'} last={'Marin'} description={'Project Manager'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/green/mayela-marin.jpg'}
              alt="Mayela Marin"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Paul'} last={'Salazar'} description={'Business Development'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/paul-salazar.jpg'}
              alt="Paul Salazar"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Rossileydys'} last={'Silva'} description={'QA Analyst'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/rossileydys-silva.jpg'}
              alt="Rossileydys Silva"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Sebastian'} last={'Muchut'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/sebastian-muchut.jpg'}
              alt="Sebastian Muchut"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Thiago'} last={'Gallo'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/new-pictures/white/thiago.jpg'}
              alt="Thiago Gallo"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Xavier'} last={'Romero'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Xavier-Romero.jpg'}
              alt="Xavier Romero"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Yanisel'} last={'Barreto'} description={'Chief of Staff'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
              alt="Yanisel Barreto"
            />
          </Card>
        </Column>
      </Columns>
    </Container>
  );
};

export default TeamList;
