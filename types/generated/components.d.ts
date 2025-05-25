import type { Schema, Struct } from '@strapi/strapi';

export interface ContentDataAccordions extends Struct.ComponentSchema {
  collectionName: 'components_content_data_accordions';
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

export interface ContentDataAnimatedText extends Struct.ComponentSchema {
  collectionName: 'components_content_data_animated_texts';
  info: {
    displayName: 'AnimatedText';
    icon: 'underline';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ContentDataCourseList extends Struct.ComponentSchema {
  collectionName: 'components_content_data_course_lists';
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

export interface ContentDataHeroBig extends Struct.ComponentSchema {
  collectionName: 'components_content_data_hero_bigs';
  info: {
    displayName: 'HeroBig';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentDataHeroSmall extends Struct.ComponentSchema {
  collectionName: 'components_content_data_hero_smalls';
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

export interface ContentDataImageText extends Struct.ComponentSchema {
  collectionName: 'components_content_data_image_texts';
  info: {
    description: '';
    displayName: 'ImageText';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    textBottom: Schema.Attribute.Blocks;
    textHighlight: Schema.Attribute.String;
    textTop: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ContentDataInfos extends Struct.ComponentSchema {
  collectionName: 'components_content_data_infos';
  info: {
    displayName: 'Infos';
    icon: 'information';
  };
  attributes: {
    infos: Schema.Attribute.Component<'elements.info', true>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ContentDataMoodPicture extends Struct.ComponentSchema {
  collectionName: 'components_content_data_mood_pictures';
  info: {
    displayName: 'MoodPicture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentDataTextElement extends Struct.ComponentSchema {
  collectionName: 'components_content_data_text_elements';
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

export interface ContentSettingsAccordionsSettings
  extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_accordions_settings';
  info: {
    description: '';
    displayName: 'Accordions';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsAnimatedText extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_animated_texts';
  info: {
    displayName: 'AnimatedText';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsCourseList extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_course_lists';
  info: {
    displayName: 'CourseList';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsHeroBig extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_hero_bigs';
  info: {
    displayName: 'HeroBig';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsHeroSmall extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_hero_smalls';
  info: {
    displayName: 'HeroSmall';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsImageText extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_image_texts';
  info: {
    displayName: 'ImageText';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsInfos extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_infos';
  info: {
    displayName: 'Infos';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsMoodPicture extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_mood_pictures';
  info: {
    displayName: 'MoodPicture';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentSettingsTextElement extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_text_elements';
  info: {
    displayName: 'TextElement';
    icon: 'cog';
  };
  attributes: {
    default: Schema.Attribute.String;
  };
}

export interface ContentAccordions extends Struct.ComponentSchema {
  collectionName: 'components_content_accordions';
  info: {
    displayName: 'Accordions';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.accordions', false>;
    settings: Schema.Attribute.Component<
      'content-settings.accordions-settings',
      false
    >;
  };
}

export interface ContentAnimatedText extends Struct.ComponentSchema {
  collectionName: 'components_content_animated_texts';
  info: {
    displayName: 'AnimatedText';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.animated-text', false>;
    settings: Schema.Attribute.Component<
      'content-settings.animated-text',
      false
    >;
  };
}

export interface ContentCourseList extends Struct.ComponentSchema {
  collectionName: 'components_content_course_lists';
  info: {
    displayName: 'CourseList';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.course-list', false>;
    settings: Schema.Attribute.Component<'content-settings.course-list', false>;
  };
}

export interface ContentHeroBig extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_bigs';
  info: {
    displayName: 'HeroBig';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.hero-big', false>;
    settings: Schema.Attribute.Component<'content-settings.hero-big', false>;
  };
}

export interface ContentHeroSmall extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_smalls';
  info: {
    displayName: 'HeroSmall';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.hero-small', false>;
    settings: Schema.Attribute.Component<'content-settings.hero-small', false>;
  };
}

export interface ContentImageText extends Struct.ComponentSchema {
  collectionName: 'components_content_image_texts';
  info: {
    description: '';
    displayName: 'ImageText';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.image-text', false>;
    settings: Schema.Attribute.Component<'content-settings.image-text', false>;
  };
}

export interface ContentInfos extends Struct.ComponentSchema {
  collectionName: 'components_content_infos';
  info: {
    displayName: 'Infos';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.infos', false>;
    settings: Schema.Attribute.Component<'content-settings.infos', false>;
  };
}

export interface ContentMoodPicture extends Struct.ComponentSchema {
  collectionName: 'components_content_mood_pictures';
  info: {
    displayName: 'MoodPicture';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.mood-picture', false>;
    settings: Schema.Attribute.Component<
      'content-settings.mood-picture',
      false
    >;
  };
}

export interface ContentTextElement extends Struct.ComponentSchema {
  collectionName: 'components_content_text_elements';
  info: {
    displayName: 'TextElement';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.text-element', false>;
    settings: Schema.Attribute.Component<
      'content-settings.text-element',
      false
    >;
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
    description: '';
    displayName: 'SimpleDate';
    icon: 'calendar';
  };
  attributes: {
    date: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-data.accordions': ContentDataAccordions;
      'content-data.animated-text': ContentDataAnimatedText;
      'content-data.course-list': ContentDataCourseList;
      'content-data.hero-big': ContentDataHeroBig;
      'content-data.hero-small': ContentDataHeroSmall;
      'content-data.image-text': ContentDataImageText;
      'content-data.infos': ContentDataInfos;
      'content-data.mood-picture': ContentDataMoodPicture;
      'content-data.text-element': ContentDataTextElement;
      'content-settings.accordions-settings': ContentSettingsAccordionsSettings;
      'content-settings.animated-text': ContentSettingsAnimatedText;
      'content-settings.course-list': ContentSettingsCourseList;
      'content-settings.hero-big': ContentSettingsHeroBig;
      'content-settings.hero-small': ContentSettingsHeroSmall;
      'content-settings.image-text': ContentSettingsImageText;
      'content-settings.infos': ContentSettingsInfos;
      'content-settings.mood-picture': ContentSettingsMoodPicture;
      'content-settings.text-element': ContentSettingsTextElement;
      'content.accordions': ContentAccordions;
      'content.animated-text': ContentAnimatedText;
      'content.course-list': ContentCourseList;
      'content.hero-big': ContentHeroBig;
      'content.hero-small': ContentHeroSmall;
      'content.image-text': ContentImageText;
      'content.infos': ContentInfos;
      'content.mood-picture': ContentMoodPicture;
      'content.text-element': ContentTextElement;
      'elements.accordion': ElementsAccordion;
      'elements.course': ElementsCourse;
      'elements.info': ElementsInfo;
      'elements.link': ElementsLink;
      'elements.simple-date': ElementsSimpleDate;
      'shared.seo': SharedSeo;
    }
  }
}
