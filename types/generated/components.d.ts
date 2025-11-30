import type { Schema, Struct } from '@strapi/strapi';

export interface MetaMeta extends Struct.ComponentSchema {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    title: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.meta': MetaMeta;
      'property.security-features': PropertySecurityFeatures;
    }
  }
}
