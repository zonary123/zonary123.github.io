export interface CertificateItem {
  id: string;
  titleKey: string;
  issuerKey: string;
  dateKey: string;
  url?: string;
}

export const certificatesData: CertificateItem[] = [
];

// export const certificatesData: CertificateItem[] = [
//   {
//     id: 'cert_1',
//     titleKey: 'certificates.items.cert1.title',
//     issuerKey: 'certificates.items.cert1.issuer',
//     dateKey: 'certificates.items.cert1.date',
//     url: 'https://github.com/zonary123'
//   }
// ];
