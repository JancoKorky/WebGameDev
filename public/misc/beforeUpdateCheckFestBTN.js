function beforeUpdateCheckFestBTN(btn, data) {
    if (btn.id == 0) {
      data.beerTent++;
    } else if (btn.id == 1) {
      data.beerTentStrong++;
    } else if (btn.id == 2) {
      data.barStrong++;
    } else if (btn.id == 3) {
      data.bar++;
    } else if (btn.id == 4) {
      data.stage++;
    } else if (btn.id == 5) {
      data.chillzone++;
    } else if (btn.id == 6) {
      data.refreshment++;
    } else if (btn.id == 7) {
      data.forestToi++;
    } else if (btn.id == 8) {
      data.toitoi++;
    } else if (btn.id == 9) {
      data.cleanToi++;
    }
    return data;
  }