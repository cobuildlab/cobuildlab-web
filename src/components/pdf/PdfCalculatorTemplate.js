import React from 'react';
import PropTypes from 'prop-types';
// import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
// import styles from './styles';
// import logo from '../../resources/cobuildlab.png';
// import bg from '../../resources/2020/home/background.svg';

const PdfCalculatorTemplate = ({ data, total }) => {
  // const items = data.map((e) => {
  //   const selectItems = e.select.length ? (
  //     e.select.map((e) => (
  //       <Text key={e} style={styles.featureSelectText}>
  //         {e}
  //       </Text>
  //     ))
  //   ) : (
  //     <Text key={e} style={styles.featureSelectText}>
  //       Not Feature Select
  //     </Text>
  //   );
  //   return (
  //     <View key={e.feature} style={styles.tableFeature}>
  //       <View style={styles.featureLeftCol}>
  //         <Text style={styles.featureTitle}>{e.feature}</Text>
  //         <Text style={styles.featureDescription}>Platform to your project</Text>
  //       </View>
  //       <View style={styles.featureMidCol}>{selectItems}</View>
  //       <View style={styles.featureRightCol}>
  //         <Text>
  //           $ {e.min} - {e.max}
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // });
  return null;
  // return (
  //   <Document>
  //     <Page wrap={false} style={styles.body}>
  //       <View style={styles.header}>
  //         <Image style={styles.logo} src={logo} />
  //         <View style={styles.headerList}>
  //           <Text style={styles.headerItem}>+1 786 600 3776 </Text>
  //           <Text style={styles.headerItem}>cobuildlab.com</Text>
  //           <Text style={styles.headerItem}>66 W Flagler St #900, Miami, FL 33130</Text>
  //         </View>
  //       </View>
  //       <View style={styles.titleContainer}>
  //         <Text style={styles.title}>Price </Text>
  //         <Text style={styles.strongTitle}>Calculator</Text>
  //       </View>
  //       <Image src={bg} style={styles.overlay} />
  //       <View style={styles.tableHeader}>
  //         <Text style={styles.tableHeaderText}>Amount</Text>
  //       </View>
  //       {items}
  //       <View style={styles.tableFooter}>
  //         <Text style={styles.tableFooterText}>Total Amount</Text>
  //         <Text style={styles.tableFooterText}>
  //           $ {total.min} - {total.max}
  //         </Text>
  //       </View>
  //       <View style={styles.description}>
  //         <Text style={styles.descriptionText}>
  //           We partner with new and early-stage entrepreneurs and industry experts to transforms
  //           ideas into Web and Mobile Software Products.{' '}
  //         </Text>
  //         <Text style={styles.descriptionText}>
  //           Since day one, our technique is focused on early results and transparent communication
  //         </Text>
  //       </View>
  //       <View style={styles.footer}>
  //         <Text style={styles.footerText}>Lest</Text>
  //         <Text style={styles.footerStrong}>build</Text>
  //         <Text style={styles.footerText}>a Great</Text>
  //         <Text style={styles.footerStrong}>idea</Text>
  //       </View>
  //     </Page>
  //   </Document>
  // );
};

PdfCalculatorTemplate.defaultProps = {
  data: [],
  total: {
    min: 0,
    max: 0,
  },
};

PdfCalculatorTemplate.propTypes = {
  data: PropTypes.array,
  total: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
};

export default PdfCalculatorTemplate;
