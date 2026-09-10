function editToastmastersForm() {
  const formID = '1MTza4DHaF3mapTaoC3mSpSWvIyQNk3J33_WzlPtrwtc' //put yo id in tis this
  const form = FormApp.openById(formID);
  
  const items = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);

  for(let i=0; i < items.length; i++) {
    const mcq = items[i].asMultipleChoiceItem();
    const title = mcq.getTitle();
    if (title === 'Best Table Topics Speaker') {
      mcq.setChoiceValues([
        'jhon dough',
        'tung tung sahur'
      ]);
    }
  }
  Logger.log('update sucessfull')
}

