$(document).ready(function () {
  var loveEarth = $('ul#indicator li a#loveEarth');
  var visitRate = $('ul#indicator li a#visitRate');
  var follower = $('ul#indicator li a#follower');

  var progressSihyun = $('.sihyun .progressBar span');
  var progressYuhan = $('.yuhan .progressBar span');
  var progressMessi = $('.messi .progressBar span');
  var progressIbra = $('.ibrahimovic .progressBar span');

  var numberPercentSihyun  = $('.sihyun .progressBar span i');
  var numberPercentYuhan = $('.yuhan .progressBar span i');
  var numberPercentMessi = $('.messi .progressBar span i');
  var numberPercentIbra = $('.ibrahimovic .progressBar span i');

  var numberGoalSihyun  = $('.sihyun .progressBar b');
  var numberGoalYuhan = $('.yuhan .progressBar b');
  var numberGoalMessi = $('.messi .progressBar b');
  var numberGoalIbra = $('.ibrahimovic .progressBar b');


  function followerLoad() {
    var sihyun = 90.2;
    var yuhan = 89;
    var messi = 81.4;
    var ibra = 73.6;

    var sihyunGoal = 456;
    var yuhanGoal = 446;
    var messiGoal = 407;
    var ibraGoal = 368;

    follower.parent().addClass('active');

    progressSihyun.height(sihyun + '%');
    progressYuhan.height(yuhan + '%');
    progressMessi.height(messi + '%');
    progressIbra.height(ibra + '%');

    numberPercentSihyun.text(sihyun + '%');
    numberPercentYuhan.text(yuhan + '%');
    numberPercentMessi.text(messi + '%');
    numberPercentIbra.text(ibra + '%');

    numberGoalSihyun.text(sihyunGoal + ' gols');
    numberGoalYuhan.text(yuhanGoal + ' gols');
    numberGoalMessi.text(messiGoal + ' gols');
    numberGoalIbra.text(ibraGoal + ' gols');
  } followerLoad();


  loveEarth.click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    var sihyun = 15;
    var yuhan =  54.4;
    var messi = 72.6;
    var ibra = 17.2;

    var sihyunGoal = 75;
    var yuhanGoal = 272;
    var messiGoal = 363;
    var ibraGoal = 83;

    progressSihyun.height(sihyun + '%');
    progressYuhan.height(yuhan + '%');
    progressMessi.height(messi + '%');
    progressIbra.height(ibra + '%');

    numberPercentSihyun.text(sihyun + '%');
    numberPercentYuhan.text(yuhan + '%');
    numberPercentMessi.text(messi + '%');
    numberPercentIbra.text(ibra + '%');

    numberGoalSihyun.text(sihyunGoal + ' gols');
    numberGoalYuhan.text(yuhanGoal + ' gols');
    numberGoalMessi.text(messiGoal + ' gols');
    numberGoalIbra.text(ibraGoal + ' gols');

  });




  visitRate.click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    var sihyun = 8;
    var yuhan = 10.2;
    var messi = 8.8;
    var ibra = 10;

    var sihyunGoal = 40;
    var yuhanGoal = 51;
    var messiGoal = 44;
    var ibraGoal = 50;

    progressSihyun.height(sihyun + '%');
    progressYuhan.height(yuhan + '%');
    progressMessi.height(messi + '%');
    progressIbra.height(ibra + '%');

    numberPercentSihyun.text(sihyun + '%');
    numberPercentYuhan.text(yuhan + '%');
    numberPercentMessi.text(messi + '%');
    numberPercentIbra.text(ibra + '%');

    numberGoalSihyun.text(sihyunGoal + ' gols');
    numberGoalYuhan.text(yuhanGoal + ' gols');
    numberGoalMessi.text(messiGoal + ' gols');
    numberGoalIbra.text(ibraGoal + ' gols');

  });



  follower.click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        followerLoad();
    });

});
