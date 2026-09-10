function createToastmastersForm() {
  const form = FormApp.create('MAHE Bengaluru Toastmasters Meeting - 24');
  
  form.setDescription("May the odds be ever in your favour\n\nPS: my speelings are bad T-T");

  form.addMultipleChoiceItem()
    .setTitle('Best Main Role Player')
    .setChoiceValues([
      ''
      ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Best Auxiliary Role Player')
    .setChoiceValues([
        ' '
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Best Table Topics Speaker')
    .setChoiceValues([
      ' '
    ])
    .setRequired(true);

  Logger.log('Form created successfully!');
  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Published URL: ' + form.getPublishedUrl());
}
