import { FC, ReactElement } from 'react';
import imgbs64 from '../../../utils/assets/img/header.png';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Font, Link } from '@react-pdf/renderer';

interface DocumentPdfProps {
    title?: string;
    header?: { code: string; version: string; title: { prefix: string; name: string } };
    footer?: { address: string; phone: string; web: { name: string; url: string }; city: string };
    showToolbar?: boolean;
    showViewer?: boolean;
}
const DocumentPdf: FC<DocumentPdfProps> = ({ header, footer, title, children, showToolbar, showViewer }) => {
    const doc = <Document title={title}>
        <Page size="LETTER" style={styles.body} wrap>
            <View style={styles.top} fixed>
                <Image style={styles.image} source={imgbs64} />
                <Text style={styles.header_t1}>{header?.code}</Text>
                <Text style={styles.header_t2}>{header?.version}</Text>
                <Text style={styles.header_t3}>{header?.title.prefix}</Text>
                <Text style={{ ...styles.header_t4, ...styles.title }}>{header?.title.name}</Text>
            </View>
            <View>{children}</View>
            <View
                style={styles.footer}
                render={({ pageNumber, totalPages }: any) => {
                    return (
                        <View>
                            <Text style={{ ...styles.text, ...styles.align_right }}>
                                {pageNumber && totalPages && `Página ${pageNumber} de ${totalPages}`}
                            </Text>
                            <Text style={{ ...styles.text, ...styles.align_right }}>
                                ______________________________________________________________________________________________________________________
                            </Text>
                            <Text style={{ ...styles.text, ...styles.align_right }}>{footer?.address}</Text>
                            <Text style={{ ...styles.text, ...styles.align_right }}>{footer?.phone}</Text>
                            <Link src={footer?.web.url}>
                                <Text style={{ ...styles.text, ...styles.align_right, ...styles.link }}>
                                    {footer?.web.name}
                                </Text>
                            </Link>
                            <Text style={{ ...styles.text, ...styles.align_right }}>{footer?.city}</Text>
                        </View>
                    );
                }}
                fixed
            />
        </Page>
    </Document>
    if(showViewer) {
        return (
            <PDFViewer className="w-100 mt-5" style={{ height: 600 }} showToolbar={showToolbar}>
                {doc}
            </PDFViewer>
        );
    }else {
        return doc;
    }
};

DocumentPdf.defaultProps = {
    header: {
        code: 'Cód.',
        version: 'Versión.',
        title: { prefix: 'Formato', name: 'FO-ADMI' },
    },
    footer: {
        address: ' Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165',
        phone: 'Línea Única de Atención a la Ciudadanía 44 44 144',
        web: {
            name: 'www.medellin.gov.co',
            url: 'http://www.medellin.gov.co/',
        },
        city: 'Medellín - Colombia',
    },
    showToolbar: false,
    showViewer: false,
};

export default DocumentPdf;

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 85,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold',
    },
    subtitle: {
        fontSize: 11,
        margin: 12,
        fontFamily: 'Helvetica-Bold',
    },
    text: {
        margin: 12,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
    },
    image: {
        height: 80,
        width: 524,
        marginVertical: 12,
        marginHorizontal: 12,
    },
    header_t1: {
        fontSize: 10,
        position: 'relative',
        textAlign: 'center',
        width: 137,
        top: -70,
        left: 12,
    },
    header_t2: {
        fontSize: 10,
        position: 'relative',
        textAlign: 'center',
        width: 137,
        top: -56,
        left: 12,
    },
    header_t3: {
        fontSize: 10,
        position: 'relative',
        textAlign: 'center',
        color: '#009999',
        top: -86,
        left: 150,
        width: 305,
    },
    header_t4: {
        fontSize: 10,
        position: 'relative',
        textAlign: 'center',
        top: -86,
        left: 150,
        marginHorizontal: 20,
        color: '#009999',
        width: 264,
    },
    footer: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'right',
        color: 'grey',
    },
    align_right: {
        fontSize: 8,
        marginRight: 47,
        marginLeft: 47,
        textAlign: 'right',
    },
    link: {
        color: 'blue',
        textDecoration: 'underline',
    },
    top: {
        marginBottom: -50,
    },
});
