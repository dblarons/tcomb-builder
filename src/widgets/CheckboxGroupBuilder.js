import StructBuilder from '../primitives/StructBuilder';

export default StructBuilder
  .setLazyTemplateFactory(provider => provider.getCheckboxGroup(), 'CheckboxGroup');
