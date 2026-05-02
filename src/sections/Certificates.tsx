import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { certificatesData } from '../data/certificates';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="certificates">
      <SectionTitle
        title={t('certificates.title')}
        subtitle={t('certificates.description')}
        accentColor="#B267E6"
        accentColorTo="#C586C0"
      />

      <div className="mt-8">
        {certificatesData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificatesData.map((cert, index) => (
              <GlassCard
                key={cert.id}
                delay={0.2 + index * 0.1}
                glowColor="rgba(178,103,230,0.5)"
                className="flex flex-col h-full hover:-translate-y-2 transition-all duration-300 group border-l-4 border-l-accent-certificates"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent-certificates/10 text-accent-certificates shrink-0 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div className="flex-1 flex flex-col h-full">
                    <h3 className="text-heading text-xl mb-1 text-accent-certificates group-hover:text-accent-certificates transition-colors">
                      {t(cert.titleKey)}
                    </h3>
                    <h4 className="text-body text-sm text-editor-muted mb-4">
                      {t(cert.issuerKey)}
                    </h4>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-editor-border">
                      <span className="text-label text-sm text-editor-muted">
                        {t(cert.dateKey)}
                      </span>
                      {cert.url && cert.url !== '#' && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-label text-sm text-accent-certificates hover:text-accent-certificates/80 transition-colors"
                        >
                          {t('certificates.view')} <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
            <div className="p-4 rounded-full bg-accent-certificates/10 text-accent-certificates">
              <Award size={36} />
            </div>
            <p className="text-heading text-lg">
              {t('certificates.coming_soon', 'Coming soon')}
            </p>
            <p className="text-body text-editor-muted max-w-md">
              {t(
                'certificates.coming_soon_desc',
                'Certificates are being added. Check back later.',
              )}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
