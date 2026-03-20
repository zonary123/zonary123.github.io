export interface CertificateItem {
  id: string;
  titleKey: string;
  issuerKey: string;
  dateKey: string;
  url?: string;
  glowColor: string;
}

export const certificatesData: CertificateItem[] = [];
