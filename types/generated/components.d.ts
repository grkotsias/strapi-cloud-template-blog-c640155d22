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

export interface SecurityFeatureSecurityFeature extends Struct.ComponentSchema {
  collectionName: 'components_security_feature_security_features';
  info: {
    displayName: 'security_feature';
  };
  attributes: {
    security_features: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-feature.security-feature'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.meta': MetaMeta;
      'security-feature.security-feature': SecurityFeatureSecurityFeature;
    }
  }
}
