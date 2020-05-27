import { StyleSheet, Font } from '@react-pdf/renderer';

const indigoColor = '#264A60';
const orangeColor = '#E76C29';

Font.register({
  family: 'Lato',
  src: 'http://fonts.gstatic.com/s/lato/v13/v0SdcGFAl2aezM9Vq_aFTQ.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#F4F6FB',
    fontFamily: 'Lato',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 90,
  },
  overlay: {
    position: 'absolute',
    top: 120,
    left: '-50%',
    width: 700,
  },
  headerList: {
    borderLeft: 1,
    borderLeftColor: '#D1D3D4',
    borderLeftStyle: 'solid',
    paddingLeft: 10,
    marginLeft: 20,
  },
  headerItem: {
    paddingTop: 2.5,
    paddingBottom: 2.5,
    color: indigoColor,
    fontSize: 8,
  },
  titleContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: indigoColor,
  },
  strongTitle: {
    color: orangeColor,
    fontSize: 25,
    fontWeight: 'bold',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  tableHeaderText: {
    color: indigoColor,
    fontWeight: 'bold',
  },
  tableFeature: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: 1,
    borderBottomColor: '#D1D3D4',
    borderBottomStyle: 'solid',
    paddingBottom: 15,
    paddingTop: 15,
  },
  featureRightCol: {
    width: '28vw',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: indigoColor,
    fontSize: 14,
  },
  featureMidCol: {
    width: '25vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: indigoColor,
  },
  featureLeftCol: {
    width: '30vw',
    display: 'flex',
    justifyContent: 'center',
    color: indigoColor,
  },
  featureTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 15,
    textTransform: 'capitalize',
  },
  featureDescription: {
    fontSize: 9,
    marginBottom: 2.5,
    textTransform: 'capitalize',
  },
  featureSelectText: {
    fontSize: 12,
    textTransform: 'capitalize',
    paddingTop: 1,
  },
  tableFooter: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 15,
    justifyContent: 'flex-end',
    color: indigoColor,
  },
  tableFooterText: {
    paddingLeft: 25,
    fontSize: 20,
  },
  description: {
    color: indigoColor,
    paddingTop: 5,
    paddingBottom: 15,
  },
  descriptionText: {
    fontSize: 10,
    paddingTop: 2.5,
    lineHeight: 1.5,
  },
  footer: {
    paddingBottom: 5,
    borderBottom: 1,
    borderBottomColor: orangeColor,
    borderBottomStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 12,
  },
  footerText: {
    color: indigoColor,
    paddingRight: 5,
  },
  footerStrong: {
    color: orangeColor,
    paddingRight: 5,
  },
});

export default styles;
