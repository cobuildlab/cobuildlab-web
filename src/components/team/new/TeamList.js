import React from 'react';
import { Columns } from 'bloomer';
import styled from 'styled-components';
import AngelLacret from '../card/teams/AngelLacret';
import AlanGuevara from '../card/teams/AlanGuevara';
import JackelinePopovich from '../card/teams/JackelinePopovich';
import JeffLeon from '../card/teams/JeffLeon';
import AlexanderRomero from '../card/teams/AlexanderRomero';
import AracelisAcosta from '../card/teams/AracelisAcosta';
import CarlosFebres from '../card/teams/CarlosFebres';
import CarlosHurtado from '../card/teams/CarlosHurtado';
import CarolinaBarcelo from '../card/teams/CarolinaBarcelo';
import CesarMorales from '../card/teams/CesarMorales';
import DanyLima from '../card/teams/DanyLima';
import EdgarEspinetti from '../card/teams/EdgarEspinetti';
import EduardoMarquez from '../card/teams/EduardoMarquez';
import ErnestoMorales from '../card/teams/ErnestoMorales';
import GerardoGarcia from '../card/teams/GerardoGarcia';
import JesusRodriguez from '../card/teams/JesusRodriguez';
import JorgeSoto from '../card/teams/JorgeSoto';
import JoseVillalobos from '../card/teams/JoseVillalobos';
import JulmerOlivero from '../card/teams/JulmerOlivero';
import KevinHernandez from '../card/teams/KevinHernandez';
import LuisEulacio from '../card/teams/LuisEulacio';
import MaiteQuijada from '../card/teams/MaiteQuijada';
import ManuelBriceno from '../card/teams/ManuelBriceno';
import MarcoMaldonado from '../card/teams/MarcoMaldonado';
import MariaMoya from '../card/teams/MariaMoya';
import MarianaBalzan from '../card/teams/MarianaBalzan';
import MayelaMarin from '../card/teams/MayelaMarin';
import MoisesMarquina from '../card/teams/MoisesMarquina';
import RicardoMoreno from '../card/teams/RicardoMoreno';
import SalomonMartinez from '../card/teams/SalomonMartinez';
import WillianMata from '../card/teams/WillianMata';
import XavierRomero from '../card/teams/XavierRomero';
import YaniselBarreto from '../card/teams/YaniselBarreto';

const Container = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const TeamList = () => {
  return (
    <Container>
      <Columns isMultiline isMarginless>
        <AngelLacret />
        <AlanGuevara />
        <JackelinePopovich />
        <JeffLeon />
        <AlexanderRomero />
        <AracelisAcosta />
        <CarlosFebres />
        <CarlosHurtado />
        <CarolinaBarcelo />
        <CesarMorales />
        <DanyLima />
        <EdgarEspinetti />
        <EduardoMarquez />
        <ErnestoMorales />
        <GerardoGarcia />
        <JesusRodriguez />
        <JorgeSoto />
        <JoseVillalobos />
        <JulmerOlivero />
        <KevinHernandez />
        <LuisEulacio />
        <MaiteQuijada />
        <ManuelBriceno />
        <MarcoMaldonado />
        <MariaMoya />
        <MarianaBalzan />
        <MayelaMarin />
        <MoisesMarquina />
        <RicardoMoreno />
        <SalomonMartinez />
        <WillianMata />
        <XavierRomero />
        <YaniselBarreto />
      </Columns>
    </Container>
  );
};

export default TeamList;
