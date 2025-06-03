import type { Schema, Struct } from '@strapi/strapi';

export interface ContentDataAccordions extends Struct.ComponentSchema {
  collectionName: 'components_content_data_accordions';
  info: {
    description: '';
    displayName: 'Accordions';
    icon: 'file';
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
    icon: 'file';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ContentDataBookList extends Struct.ComponentSchema {
  collectionName: 'components_content_data_book_lists';
  info: {
    displayName: 'BookList';
    icon: 'file';
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
    icon: 'file';
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
    icon: 'file';
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
    icon: 'file';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContentDataHighlightedLinks extends Struct.ComponentSchema {
  collectionName: 'components_content_data_highlighted_links';
  info: {
    displayName: 'HighlightedLinks';
    icon: 'file';
  };
  attributes: {
    imageLinks: Schema.Attribute.Component<'elements.image-link', true>;
  };
}

export interface ContentDataImageText extends Struct.ComponentSchema {
  collectionName: 'components_content_data_image_texts';
  info: {
    description: '';
    displayName: 'ImageText';
    icon: 'file';
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
    icon: 'file';
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
    icon: 'file';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentDataSwiperCard extends Struct.ComponentSchema {
  collectionName: 'components_content_data_swiper_cards';
  info: {
    displayName: 'SwiperCard';
    icon: 'file';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.swiper-card-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContentDataSwiperLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_data_swiper_larges';
  info: {
    displayName: 'SwiperLarge';
    icon: 'file';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.swiper-large-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContentDataSwiperSimple extends Struct.ComponentSchema {
  collectionName: 'components_content_data_swiper_simples';
  info: {
    displayName: 'SwiperSimple';
    icon: 'file';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContentDataTextElement extends Struct.ComponentSchema {
  collectionName: 'components_content_data_text_elements';
  info: {
    displayName: 'TextElement';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContentSettingsAccordions extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_accordions';
  info: {
    description: '';
    displayName: 'Accordions';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentSettingsAnimatedText extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_animated_texts';
  info: {
    displayName: 'AnimatedText';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface ContentSettingsBookList extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_book_lists';
  info: {
    displayName: 'BookList';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface ContentSettingsCourseList extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_course_lists';
  info: {
    displayName: 'CourseList';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentSettingsHeroLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_hero_bigs';
  info: {
    displayName: 'HeroLarge';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
  };
}

export interface ContentSettingsHeroSmall extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_hero_smalls';
  info: {
    displayName: 'HeroSmall';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
  };
}

export interface ContentSettingsHighlightedLinks
  extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_highlighted_links';
  info: {
    displayName: 'HighlightedLinks';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentSettingsImageText extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_image_texts';
  info: {
    displayName: 'ImageText';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentSettingsInfos extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_infos';
  info: {
    displayName: 'Infos';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface ContentSettingsMoodPicture extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_mood_pictures';
  info: {
    displayName: 'MoodPicture';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
  };
}

export interface ContentSettingsSpacingSettings extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_spacing_settings';
  info: {
    displayName: 'SpacingSettings';
    icon: 'cog';
  };
  attributes: {
    marginBottom: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large', 'xlarge']
    > &
      Schema.Attribute.DefaultTo<'large'>;
    marginTop: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large', 'xlarge']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    paddingBottom: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large', 'xlarge']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    paddingTop: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large', 'xlarge']
    > &
      Schema.Attribute.DefaultTo<'none'>;
  };
}

export interface ContentSettingsSwiperCard extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_swiper_cards';
  info: {
    displayName: 'SwiperCard';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentSettingsSwiperLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_swiper_larges';
  info: {
    displayName: 'SwiperLarge';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentSettingsSwiperSimple extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_swiper_simples';
  info: {
    displayName: 'SwiperSimple';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentSettingsTextElement extends Struct.ComponentSchema {
  collectionName: 'components_content_settings_text_elements';
  info: {
    displayName: 'TextElement';
    icon: 'cog';
  };
  attributes: {
    spacing: Schema.Attribute.Component<
      'content-settings.spacing-settings',
      false
    >;
    style: Schema.Attribute.Enumeration<['light', 'gray', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface ContentAccordions extends Struct.ComponentSchema {
  collectionName: 'components_content_accordions';
  info: {
    displayName: 'Accordions';
    icon: 'bulletList';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.accordions', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<'content-settings.accordions', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentAnimatedText extends Struct.ComponentSchema {
  collectionName: 'components_content_animated_texts';
  info: {
    displayName: 'AnimatedText';
    icon: 'underline';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.animated-text', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.animated-text',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentBookList extends Struct.ComponentSchema {
  collectionName: 'components_content_book_lists';
  info: {
    displayName: 'BookList';
    icon: 'book';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.book-list', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<'content-settings.book-list', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentCourseList extends Struct.ComponentSchema {
  collectionName: 'components_content_course_lists';
  info: {
    displayName: 'CourseList';
    icon: 'calendar';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.course-list', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.course-list',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentHeroLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_bigs';
  info: {
    displayName: 'HeroLarge';
    icon: 'expand';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.hero-large', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<'content-settings.hero-large', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentHeroSmall extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_smalls';
  info: {
    displayName: 'HeroSmall';
    icon: 'crop';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.hero-small', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<'content-settings.hero-small', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentHighlightedLinks extends Struct.ComponentSchema {
  collectionName: 'components_content_highlighted_links';
  info: {
    displayName: 'HighlightedLinks';
    icon: 'link';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.highlighted-links', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.highlighted-links',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentImageText extends Struct.ComponentSchema {
  collectionName: 'components_content_image_texts';
  info: {
    description: '';
    displayName: 'ImageText';
    icon: 'picture';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.image-text', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<'content-settings.image-text', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentInfos extends Struct.ComponentSchema {
  collectionName: 'components_content_infos';
  info: {
    displayName: 'Infos';
    icon: 'information';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.infos', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<'content-settings.infos', false> &
      Schema.Attribute.Required;
  };
}

export interface ContentMoodPicture extends Struct.ComponentSchema {
  collectionName: 'components_content_mood_pictures';
  info: {
    displayName: 'MoodPicture';
    icon: 'picture';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.mood-picture', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.mood-picture',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentSwiperCard extends Struct.ComponentSchema {
  collectionName: 'components_content_swiper_cards';
  info: {
    displayName: 'SwiperCard';
    icon: 'stack';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.swiper-card', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.swiper-card',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentSwiperLarge extends Struct.ComponentSchema {
  collectionName: 'components_content_swiper_larges';
  info: {
    displayName: 'SwiperLarge';
    icon: 'stack';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.swiper-large', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.swiper-large',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentSwiperSimple extends Struct.ComponentSchema {
  collectionName: 'components_content_swiper_simples';
  info: {
    displayName: 'SwiperSimple';
    icon: 'stack';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.swiper-simple', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.swiper-simple',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentTextElement extends Struct.ComponentSchema {
  collectionName: 'components_content_text_elements';
  info: {
    displayName: 'TextElement';
    icon: 'bold';
  };
  attributes: {
    data: Schema.Attribute.Component<'content-data.text-element', false> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<
      'content-settings.text-element',
      false
    > &
      Schema.Attribute.Required;
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
    icon: 'store';
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
    icon: 'envelop';
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
    displayName: 'Course';
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

export interface ElementsImageLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_image_links';
  info: {
    displayName: 'ImageLink';
    icon: 'link';
  };
  attributes: {
    entryTitle: Schema.Attribute.String & Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_infos';
  info: {
    displayName: 'Info';
    icon: 'information';
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
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<
      ['_self', '_blank', '_parent', '_top', '_unfencedTop']
    >;
    text: Schema.Attribute.String;
  };
}

export interface ElementsPartner extends Struct.ComponentSchema {
  collectionName: 'components_elements_partners';
  info: {
    displayName: 'Partner';
    icon: 'user';
  };
  attributes: {
    entryTitle: Schema.Attribute.String & Schema.Attribute.Private;
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
    icon: 'message';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    icon: Schema.Attribute.Enumeration<['facebook', 'instagram']>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsSwiperCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_swiper_card_items';
  info: {
    displayName: 'SwiperCardItem';
    icon: 'file';
  };
  attributes: {
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSwiperLargeItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_swiper_large_items';
  info: {
    displayName: 'SwiperLargeItem';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    infos: Schema.Attribute.String;
    links: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'layout';
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
    icon: 'layout';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    sidebar: Schema.Attribute.Component<'shared.sidebar', false>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'layout';
  };
  attributes: {
    follow: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    index: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    metaDescription: Schema.Attribute.String;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedSidebar extends Struct.ComponentSchema {
  collectionName: 'components_shared_sidebars';
  info: {
    displayName: 'Sidebar';
    icon: 'layout';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    logoLink: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface SharedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'code';
  };
  attributes: {
    slug: Schema.Attribute.String;
    value: Schema.Attribute.Text;
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
      'content-data.highlighted-links': ContentDataHighlightedLinks;
      'content-data.image-text': ContentDataImageText;
      'content-data.infos': ContentDataInfos;
      'content-data.mood-picture': ContentDataMoodPicture;
      'content-data.swiper-card': ContentDataSwiperCard;
      'content-data.swiper-large': ContentDataSwiperLarge;
      'content-data.swiper-simple': ContentDataSwiperSimple;
      'content-data.text-element': ContentDataTextElement;
      'content-settings.accordions': ContentSettingsAccordions;
      'content-settings.animated-text': ContentSettingsAnimatedText;
      'content-settings.book-list': ContentSettingsBookList;
      'content-settings.course-list': ContentSettingsCourseList;
      'content-settings.hero-large': ContentSettingsHeroLarge;
      'content-settings.hero-small': ContentSettingsHeroSmall;
      'content-settings.highlighted-links': ContentSettingsHighlightedLinks;
      'content-settings.image-text': ContentSettingsImageText;
      'content-settings.infos': ContentSettingsInfos;
      'content-settings.mood-picture': ContentSettingsMoodPicture;
      'content-settings.spacing-settings': ContentSettingsSpacingSettings;
      'content-settings.swiper-card': ContentSettingsSwiperCard;
      'content-settings.swiper-large': ContentSettingsSwiperLarge;
      'content-settings.swiper-simple': ContentSettingsSwiperSimple;
      'content-settings.text-element': ContentSettingsTextElement;
      'content.accordions': ContentAccordions;
      'content.animated-text': ContentAnimatedText;
      'content.book-list': ContentBookList;
      'content.course-list': ContentCourseList;
      'content.hero-large': ContentHeroLarge;
      'content.hero-small': ContentHeroSmall;
      'content.highlighted-links': ContentHighlightedLinks;
      'content.image-text': ContentImageText;
      'content.infos': ContentInfos;
      'content.mood-picture': ContentMoodPicture;
      'content.swiper-card': ContentSwiperCard;
      'content.swiper-large': ContentSwiperLarge;
      'content.swiper-simple': ContentSwiperSimple;
      'content.text-element': ContentTextElement;
      'elements.accordion': ElementsAccordion;
      'elements.address': ElementsAddress;
      'elements.book': ElementsBook;
      'elements.contact': ElementsContact;
      'elements.course': ElementsCourse;
      'elements.image-link': ElementsImageLink;
      'elements.info': ElementsInfo;
      'elements.link': ElementsLink;
      'elements.partner': ElementsPartner;
      'elements.simple-date': ElementsSimpleDate;
      'elements.social': ElementsSocial;
      'elements.swiper-card-item': ElementsSwiperCardItem;
      'elements.swiper-large-item': ElementsSwiperLargeItem;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.seo': SharedSeo;
      'shared.sidebar': SharedSidebar;
      'shared.text-block': SharedTextBlock;
    }
  }
}
