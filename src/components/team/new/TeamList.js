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
              src={'./../../../assets/images/team/team-pictures/jacqueline-popovich.png'}
              alt="Jacqueline Popovich"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card
            first={'Alessandra'}
            last={'Lubertino'}
            description={'Growth and Strategic Partnerships'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/alessandra-lubertino.jpg'}
              alt="Alessandra Lubertino"
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
          <Card first={'Carlos'} last={'Febres'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Carlos-Febres.jpg'}
              alt="Carlos Febres"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Carlos'} last={'Hurtado'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Carlos-Hurtado.jpg'}
              alt="Carlos Hurtado"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Carolina'} last={'Barcelo'} description={'Content Writer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Carolina-Barcelo.jpg'}
              alt="Carolina Barcelo"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Cesar'} last={'Morales'} description={'QA Analyst'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Cesar-Morales.jpg'}
              alt="Cesar Morales"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Dany'} last={'Lima'} description={'Full Stack Javascript/Python Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Dany-Leonel-Lima.jpg'}
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
          <Card first={'Eduardo'} last={'Marquez'} description={'Full Stack Javascript Developer'}>
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
              src={'./../../../assets/images/team/team-pictures/Ernesto-Morales.jpg'}
              alt="Ernesto Morales"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Gerardo'} last={'Garcia'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Gerardo-Garcia.jpg'}
              alt="Gerardo Garcia"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Jesus'} last={'Rodriguez'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Jesus-Rodriguez.jpg'}
              alt="Jesus Rodriguez"
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
          <Card first={'Luis'} last={'Eulacio'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
              alt="Kevin Hernandez"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Maite'} last={'Quijada'} description={'Content Writer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Maite-Quijada.jpg'}
              alt="Maite Quijada"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Manuel'} last={'Briceno'} description={'UI/UX Designer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Manuel-Briceno.jpg'}
              alt="Manuel Briceno"
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
              src={'./../../../assets/images/team/team-pictures/Mayela-Marin.jpg'}
              alt="Mayela Marin"
            />
          </Card>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <Card first={'Salomon'} last={'Martinez'} description={'Full Stack Javascript Developer'}>
            <StaticImage
              className={'team-member-img'}
              src={'./../../../assets/images/team/team-pictures/Salomon-Martinez.jpg'}
              alt="Salomon Martinez"
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
