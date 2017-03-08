function $DONE(err) {
  if (err) {
    $ERROR(err);
  }
  print('test262/done');
  $.destroy();
}

function $LOG(str) {
  print(str);
}
