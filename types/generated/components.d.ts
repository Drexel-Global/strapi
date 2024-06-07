import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleHeroArticleHero extends Schema.Component {
  collectionName: 'components_article_hero_article_heroes';
  info: {
    displayName: 'article-hero';
    icon: 'layout';
  };
  attributes: {
    imageSource: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface ContentAsideContentAside extends Schema.Component {
  collectionName: 'components_content_aside_content_asides';
  info: {
    displayName: 'content-aside';
    icon: 'layout';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks & Attribute.Required;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    isFlipped: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface CtaButtonCtaButton extends Schema.Component {
  collectionName: 'components_cta_button_cta_buttons';
  info: {
    displayName: 'cta-button';
  };
  attributes: {
    type: Attribute.Enumeration<['contact', 'performance']>;
    buttonText: Attribute.String & Attribute.Required;
  };
}

export interface PlainTextPlainText extends Schema.Component {
  collectionName: 'components_plain_text_plain_texts';
  info: {
    displayName: 'plain-text';
    icon: 'bold';
  };
  attributes: {
    text: Attribute.Blocks & Attribute.Required;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'plus';
  };
  attributes: {
    null: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article-hero.article-hero': ArticleHeroArticleHero;
      'content-aside.content-aside': ContentAsideContentAside;
      'cta-button.cta-button': CtaButtonCtaButton;
      'plain-text.plain-text': PlainTextPlainText;
      'socials.socials': SocialsSocials;
    }
  }
}
