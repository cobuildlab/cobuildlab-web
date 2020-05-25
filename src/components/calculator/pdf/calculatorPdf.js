import React, { useCallback } from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = (data) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{data.text}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const calculatorPdf = () => {
  const onClick = useCallback(async () => {
    const documentData = MyDocument({ text: 'hola' });
    const blob = await pdf(documentData).toBlob();
    console.log('pdf in base64', blob);
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function() {
      const result = reader.result;
      console.log('pdf in base64', result);
    };
  }, []);

  return (
    <div>
      <button onClick={onClick}>get pdf</button>
    </div>
  );
};

export default calculatorPdf;
