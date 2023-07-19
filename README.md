## 로컬캐싱
### useCallback사용
- input에서 onChange이벤트를 적용했을 때 타이핑을 할 때마다 불필요한 api를
호출하는 현상을 막기 위해 debouncing을 사용.
- 1초의 delay를 줘서 1초동안 발생하는 이벤트중 마지막 이벤트만 실행해서 api호출 횟수를 줄이는 방법


  