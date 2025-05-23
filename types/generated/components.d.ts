import type { Schema, Struct } from '@strapi/strapi';

export interface ContentElementsAccordions extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_accordions';
  info: {
    description: '';
    displayName: 'Accordions';
    icon: 'bulletList';
  };
  attributes: {
    accordions: Schema.Attribute.Component<'elements.accordion', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContentElementsAnimatedText extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_animated_texts';
  info: {
    displayName: 'AnimatedText';
    icon: 'underline';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ContentElementsCourseList extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_course_lists';
  info: {
    description: '';
    displayName: 'CourseList';
    icon: 'calendar';
  };
  attributes: {
    courses: Schema.Attribute.Component<'elements.course', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContentElementsHeroBig extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_hero_bigs';
  info: {
    displayName: 'HeroBig';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentElementsHeroSmall extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_hero_smalls';
  info: {
    displayName: 'HeroSmall';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContentElementsImageText extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_image_texts';
  info: {
    displayName: 'ImageText';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    infos: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    text1: Schema.Attribute.Blocks;
    text2: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ContentElementsInfos extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_infos';
  info: {
    displayName: 'Infos';
    icon: 'information';
  };
  attributes: {
    infos: Schema.Attribute.Component<'elements.info', true>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ContentElementsMoodPicture extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_mood_pictures';
  info: {
    displayName: 'MoodPicture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentElementsTextElement extends Struct.ComponentSchema {
  collectionName: 'components_content_elements_text_elements';
  info: {
    displayName: 'TextElement';
    icon: 'layer';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCourse extends Struct.ComponentSchema {
  collectionName: 'components_elements_courses';
  info: {
    description: '';
    displayName: 'course';
    icon: 'calendar';
  };
  attributes: {
    dates: Schema.Attribute.Component<'elements.simple-date', true>;
    description: Schema.Attribute.Blocks;
    link: Schema.Attribute.Component<'elements.link', false>;
    place: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsSimpleDate extends Struct.ComponentSchema {
  collectionName: 'components_elements_simple_dates';
  info: {
    displayName: 'SimpleDate';
    icon: 'calendar';
  };
  attributes: {
    date: Schema.Attribute.Date;
  };
}

export interface SharedScharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_schared_images';
  info: {
    displayName: 'ScharedImage';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean;
    sharedImage: Schema.Attribute.Component<'shared.schared-image', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-elements.accordions': ContentElementsAccordions;
      'content-elements.animated-text': ContentElementsAnimatedText;
      'content-elements.course-list': ContentElementsCourseList;
      'content-elements.hero-big': ContentElementsHeroBig;
      'content-elements.hero-small': ContentElementsHeroSmall;
      'content-elements.image-text': ContentElementsImageText;
      'content-elements.infos': ContentElementsInfos;
      'content-elements.mood-picture': ContentElementsMoodPicture;
      'content-elements.text-element': ContentElementsTextElement;
      'elements.accordion': ElementsAccordion;
      'elements.course': ElementsCourse;
      'elements.info': ElementsInfo;
      'elements.link': ElementsLink;
      'elements.simple-date': ElementsSimpleDate;
      'shared.schared-image': SharedScharedImage;
      'shared.seo': SharedSeo;
    }
  }
}
