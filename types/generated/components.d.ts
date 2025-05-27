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

export interface ContentDataBookList extends Struct.ComponentSchema {
  collectionName: 'components_content_data_book_lists';
  info: {
    displayName: 'BookList';
  };
  attributes: {
    books: Schema.Attribute.Component<'elements.book', true>;
    title: Schema.Attribute.String;
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

export interface ContentDataHeroLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_data_hero_bigs';
  info: {
    displayName: 'HeroLarge';
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

export interface ContentSettingsBookList extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_book_lists';
  info: {
    displayName: 'BookList';
    icon: 'book';
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

export interface ContentSettingsHeroLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_hero_bigs';
  info: {
    displayName: 'HeroLarge';
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

export interface ContentBookList extends Struct.ComponentSchema {
  collectionName: 'components_content_book_lists';
  info: {
    displayName: 'BookList';
    icon: 'book';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.book-list', false>;
    settings: Schema.Attribute.Component<'content-settings.book-list', false>;
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

export interface ContentHeroLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_bigs';
  info: {
    displayName: 'HeroLarge';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.hero-large', false>;
    settings: Schema.Attribute.Component<'content-settings.hero-large', false>;
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

export interface ElementsAddress extends Struct.ComponentSchema {
  collectionName: 'components_elements_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    name: Schema.Attribute.String;
    place: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface ElementsBook extends Struct.ComponentSchema {
  collectionName: 'components_elements_books';
  info: {
    description: '';
    displayName: 'Book';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    infos: Schema.Attribute.Blocks;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsContact extends Struct.ComponentSchema {
  collectionName: 'components_elements_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    mail: Schema.Attribute.Component<'elements.link', false>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.Component<'elements.link', false>;
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

export interface ElementsPartner extends Struct.ComponentSchema {
  collectionName: 'components_elements_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
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

export interface ElementsSocial extends Struct.ComponentSchema {
  collectionName: 'components_elements_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    icon: Schema.Attribute.Enumeration<['facebook', 'instagram']>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    address: Schema.Attribute.Component<'elements.address', false>;
    contact: Schema.Attribute.Component<'elements.contact', false>;
    links: Schema.Attribute.Component<'elements.link', true>;
    partners: Schema.Attribute.Component<'elements.partner', true>;
    socials: Schema.Attribute.Component<'elements.social', true>;
    text1: Schema.Attribute.Blocks;
    text2: Schema.Attribute.Blocks;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    ctaButtons: Schema.Attribute.Component<'shared.header-cta-buttons', false>;
    links: Schema.Attribute.Component<'elements.link', true>;
    sidebar: Schema.Attribute.Component<'shared.sidebar', false>;
  };
}

export interface SharedHeaderCtaButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_cta_buttons';
  info: {
    description: '';
    displayName: 'HeaderCtaButtons';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', false>;
    menu: Schema.Attribute.String;
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
    follow: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    index: Schema.Attribute.Boolean;
    metaDescription: Schema.Attribute.String;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedSidebar extends Struct.ComponentSchema {
  collectionName: 'components_shared_sidebars';
  info: {
    displayName: 'Sidebar';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    logoLink: Schema.Attribute.Component<'elements.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-data.accordions': ContentDataAccordions;
      'content-data.animated-text': ContentDataAnimatedText;
      'content-data.book-list': ContentDataBookList;
      'content-data.course-list': ContentDataCourseList;
      'content-data.hero-large': ContentDataHeroLarge;
      'content-data.hero-small': ContentDataHeroSmall;
      'content-data.image-text': ContentDataImageText;
      'content-data.infos': ContentDataInfos;
      'content-data.mood-picture': ContentDataMoodPicture;
      'content-data.text-element': ContentDataTextElement;
      'content-settings.accordions-settings': ContentSettingsAccordionsSettings;
      'content-settings.animated-text': ContentSettingsAnimatedText;
      'content-settings.book-list': ContentSettingsBookList;
      'content-settings.course-list': ContentSettingsCourseList;
      'content-settings.hero-large': ContentSettingsHeroLarge;
      'content-settings.hero-small': ContentSettingsHeroSmall;
      'content-settings.image-text': ContentSettingsImageText;
      'content-settings.infos': ContentSettingsInfos;
      'content-settings.mood-picture': ContentSettingsMoodPicture;
      'content-settings.text-element': ContentSettingsTextElement;
      'content.accordions': ContentAccordions;
      'content.animated-text': ContentAnimatedText;
      'content.book-list': ContentBookList;
      'content.course-list': ContentCourseList;
      'content.hero-large': ContentHeroLarge;
      'content.hero-small': ContentHeroSmall;
      'content.image-text': ContentImageText;
      'content.infos': ContentInfos;
      'content.mood-picture': ContentMoodPicture;
      'content.text-element': ContentTextElement;
      'elements.accordion': ElementsAccordion;
      'elements.address': ElementsAddress;
      'elements.book': ElementsBook;
      'elements.contact': ElementsContact;
      'elements.course': ElementsCourse;
      'elements.info': ElementsInfo;
      'elements.link': ElementsLink;
      'elements.partner': ElementsPartner;
      'elements.simple-date': ElementsSimpleDate;
      'elements.social': ElementsSocial;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.header-cta-buttons': SharedHeaderCtaButtons;
      'shared.seo': SharedSeo;
      'shared.sidebar': SharedSidebar;
    }
  }
}
