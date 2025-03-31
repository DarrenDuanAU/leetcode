var mergeTwoLists = function(list1, list2) {
  let result = [];
  while(list1.length !== 0 || list2.length !== 0) {
      if (list1.length === 0 ) {
          result.push(...list2);
          break;
      } else if (list2.length === 0) {
          result.push(...list1);
          break;
      } else {
          if ( list1[0] < list2[0] ) {
              result.push(list1[0]);
              list1 = list1.slice(1);
          } else {
              result.push(list2[0]);
              list2 = list2.slice(1);
          }
      }

  }
  return result;
};