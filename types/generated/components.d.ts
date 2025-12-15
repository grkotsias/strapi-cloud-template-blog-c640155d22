import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_components_call_to_actions';
  info: {
    displayName: 'Call To Action';
    icon: 'archive';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    variant: Schema.Attribute.Enumeration<
      [
        'plain-link',
        'grey-solid',
        'light-grey-solid',
        'outline-dark-sm',
        'outline-dark-lg',
        'outline-dark-submit',
      ]
    > &
      Schema.Attribute.DefaultTo<'outline-dark-lg'>;
  };
}

export interface ComponentsCtaTile extends Struct.ComponentSchema {
  collectionName: 'components_components_cta_tiles';
  info: {
    displayName: 'CTA Tile';
    icon: 'archive';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ComponentsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'archive';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_components_seos';
  info: {
    displayName: 'SEO';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    keywords: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSimpleLink extends Struct.ComponentSchema {
  collectionName: 'components_components_simple_links';
  info: {
    displayName: 'Simple Link';
    icon: 'archive';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentsStatisticsStats extends Struct.ComponentSchema {
  collectionName: 'components_components_statistics_stats';
  info: {
    displayName: 'Statistics Stats';
    icon: 'archive';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ComponentsValuesItem extends Struct.ComponentSchema {
  collectionName: 'components_components_values_items';
  info: {
    displayName: 'Values Item';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HeadersHeaderContact extends Struct.ComponentSchema {
  collectionName: 'components_headers_header_contacts';
  info: {
    displayName: 'Header Contact';
    icon: 'apps';
  };
  attributes: {
    contactInfo: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    socialsLabel: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HeadersHeaderPage extends Struct.ComponentSchema {
  collectionName: 'components_headers_header_pages';
  info: {
    displayName: 'Header Page';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['default', 'no-image']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface HeadersHomeHeader extends Struct.ComponentSchema {
  collectionName: 'components_headers_home_headers';
  info: {
    displayName: 'Home Header';
    icon: 'apps';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    slides: Schema.Attribute.Media<'images' | 'files' | 'videos', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['image/video', 'image-carousel']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image/video'>;
  };
}

export interface MetaMeta extends Struct.ComponentSchema {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface NavDropdowns extends Struct.ComponentSchema {
  collectionName: 'components_nav_dropdowns';
  info: {
    displayName: 'Dropdowns';
    icon: 'bulletList';
  };
  attributes: {
    cta: Schema.Attribute.Component<'components.call-to-action', false>;
    dropdownItem: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    dropdownMenu: Schema.Attribute.Component<'nav.menu-columns', false>;
    itemDescription: Schema.Attribute.Text;
    itemLabel: Schema.Attribute.String & Schema.Attribute.Required;
    itemUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavMenuCol extends Struct.ComponentSchema {
  collectionName: 'components_nav_menu_cols';
  info: {
    displayName: 'Menu Column';
    icon: 'bulletList';
  };
  attributes: {
    columnLabel: Schema.Attribute.String;
    links: Schema.Attribute.Component<'components.simple-link', true>;
  };
}

export interface NavMenuColumns extends Struct.ComponentSchema {
  collectionName: 'components_nav_menu_columns';
  info: {
    displayName: 'Menu Columns';
    icon: 'bulletList';
  };
  attributes: {
    columns: Schema.Attribute.Component<'nav.menu-col', true>;
  };
}

export interface PropertySecurityFeatures extends Struct.ComponentSchema {
  collectionName: 'components_property_security_features';
  info: {
    displayName: 'Security features';
  };
  attributes: {
    items: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-feature.security-feature'
    >;
  };
}

export interface SectionsCtaTiles extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_tiles';
  info: {
    displayName: 'CTA Tiles';
    icon: 'apps';
  };
  attributes: {
    tiles: Schema.Attribute.Component<'components.cta-tile', true>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'components.faq-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsInsightsListing extends Struct.ComponentSchema {
  collectionName: 'components_sections_insights_listings';
  info: {
    displayName: 'Insights Listing';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::insight.insight'>;
    cta: Schema.Attribute.Component<'components.call-to-action', false>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_sections_newsletters';
  info: {
    displayName: 'Newsletter';
    icon: 'apps';
  };
  attributes: {
    cta: Schema.Attribute.Component<'components.call-to-action', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsPropertiesListing extends Struct.ComponentSchema {
  collectionName: 'components_sections_properties_listings';
  info: {
    displayName: 'Properties Listing';
    icon: 'apps';
  };
  attributes: {
    cta: Schema.Attribute.Component<'components.call-to-action', false>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    properties: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsServicesTiles extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_tiles';
  info: {
    displayName: 'Services Tiles';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    services: Schema.Attribute.Component<'components.values-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsStatistics extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics';
  info: {
    displayName: 'Statistics';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'components.statistics-stats', true>;
  };
}

export interface SectionsSuccessStoriesListing extends Struct.ComponentSchema {
  collectionName: 'components_sections_success_stories_listings';
  info: {
    displayName: 'Success Stories Listing';
  };
  attributes: {
    articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::success-story.success-story'
    >;
    cta: Schema.Attribute.Component<'components.call-to-action', false>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsTextCentered extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_centereds';
  info: {
    displayName: 'Text Centered';
    icon: 'apps';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['white', 'light-grey']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light-grey'>;
    cta: Schema.Attribute.Component<'components.call-to-action', false>;
    description: Schema.Attribute.Text;
    quoteTitle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsTextColumnsWithStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_columns_with_stats';
  info: {
    displayName: 'Statistics (Home)';
    icon: 'apps';
  };
  attributes: {
    cta: Schema.Attribute.Component<'components.call-to-action', false>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    statistics: Schema.Attribute.Component<'components.statistics-stats', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsTextWithVariants extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_with_variants';
  info: {
    displayName: 'Text with Variants';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    statistics: Schema.Attribute.Component<'components.statistics-stats', true>;
    switchSides: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['text', 'image', 'statistics']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface SectionsValuesColumns extends Struct.ComponentSchema {
  collectionName: 'components_sections_values_columns';
  info: {
    displayName: 'Values Tiles';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    values: Schema.Attribute.Component<'components.values-item', true>;
  };
}

export interface SectionsWysiwyg extends Struct.ComponentSchema {
  collectionName: 'components_sections_wysiwygs';
  info: {
    displayName: 'WYSIWYG';
    icon: 'apps';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface WidgetsLinksWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_links_widgets';
  info: {
    displayName: 'Links';
    icon: 'calendar';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.simple-link', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.call-to-action': ComponentsCallToAction;
      'components.cta-tile': ComponentsCtaTile;
      'components.faq-item': ComponentsFaqItem;
      'components.seo': ComponentsSeo;
      'components.simple-link': ComponentsSimpleLink;
      'components.statistics-stats': ComponentsStatisticsStats;
      'components.values-item': ComponentsValuesItem;
      'headers.header-contact': HeadersHeaderContact;
      'headers.header-page': HeadersHeaderPage;
      'headers.home-header': HeadersHomeHeader;
      'meta.meta': MetaMeta;
      'nav.dropdowns': NavDropdowns;
      'nav.menu-col': NavMenuCol;
      'nav.menu-columns': NavMenuColumns;
      'property.security-features': PropertySecurityFeatures;
      'sections.cta-tiles': SectionsCtaTiles;
      'sections.faq': SectionsFaq;
      'sections.insights-listing': SectionsInsightsListing;
      'sections.newsletter': SectionsNewsletter;
      'sections.properties-listing': SectionsPropertiesListing;
      'sections.services-tiles': SectionsServicesTiles;
      'sections.statistics': SectionsStatistics;
      'sections.success-stories-listing': SectionsSuccessStoriesListing;
      'sections.text-centered': SectionsTextCentered;
      'sections.text-columns-with-stats': SectionsTextColumnsWithStats;
      'sections.text-with-variants': SectionsTextWithVariants;
      'sections.values-columns': SectionsValuesColumns;
      'sections.wysiwyg': SectionsWysiwyg;
      'widgets.links-widget': WidgetsLinksWidget;
    }
  }
}
