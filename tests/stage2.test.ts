import { assertPrint, assertFail, assertTCFail, assertTC, assertParseFail} from "./asserts.test";



describe("Stage1 define args syntax tests", ()=>{
  //1 
  var funcdef= 
  `
  def f(x:int, **kwargs, *args):
    print(x, args, kwargs)
  `
  assertParseFail("func: kwargs order issue1", funcdef);

  //2
  var funcdef= 
  `
  def f(*args, **kwargs, x:int):
    print(x, args, kwargs)
  `
  assertParseFail("func: kwargs order issue2", funcdef);

  //3
  var funcdef= 
  `
  def f(**kwargs, *args, x:int):
    print(x, args, kwargs)
  `
  assertParseFail("func: kwargs order issue3", funcdef);

  //4
  `
  def f(**kwargs, x:int, *args):
    print(x, args, kwargs)
  `
  assertParseFail("func: kwargs order issue4", funcdef);
  
  //5
  var funcdef= 
  `
  def f(x:int, *args, *kwargs):
    print(x, args, kwargs)
  `
  assertParseFail("func: double * error", funcdef);

  //6
  var funcdef= 
  `
  def f(x:int, *args, *kwargs):
    print(x, args, kwargs)
  `
  assertParseFail("func: double * error", funcdef);

  //7
  var funcdef= 
  `
  def f(x:int, **args, **kwargs):
    print(x, args, kwargs)
  `
  assertParseFail("func: double ** error", funcdef);

  //8
  var funcdef= 
  `
  def f(x:int, ***args, **kwargs):
    print(x, args, kwargs)
  `
  assertParseFail("func: unexpeceted *? error", funcdef);

})