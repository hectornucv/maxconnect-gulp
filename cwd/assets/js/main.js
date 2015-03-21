/*===================================================
=            Max Connect Javascript File            =
===================================================*/
// Author: Alex King
// console.info('main.js - Version: 1.90 10-OCT 12:21')
// ToApply Function updated and working
// Additional Styling to before
var MobileEnabled = false;
/*===================================================
=            Check if Jquery is loaded              =
===================================================*/
if (typeof window.jQuery == 'undefined') {
    //console.error("jQuery Not found");
    var jq = document.createElement('script');
    jq.type = 'text/javascript';
    // Path to jquery.js file, eg. Google hosted version
    jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(jq);
} else {
    // console.log("jQuery Already Loaded");
}
/*==========================================================
=            Disable Backspace Not in Input/Textarea        =
==========================================================*/
function disableBack() {
    try {
        window.onkeydown = function(event) {
            if ($('input:focus').length === 0 && $('textarea:focus').length === 0) {
                if (event.which == 8) {

                    event.preventDefault();

                };
            };

        }
    } catch (e) {
        // console.log(('An error has occurred: ' + e.message));
    }
}
disableBack();






/*===================================================
=    Listtable 'Browse Pages' Actions (eg.Flag )     =
===================================================*/
function enabled_actionicons() {
    try {
        if ($(".action_icons")) {
            $('.action_icons .action_icon.expand').click(function() {
                try {
                    $(this).toggleClass('open');
                    $(this).parent().parent('tr').next('tr').toggle();
                } catch (e) {

                }
            });
            try {
                $('.action_icons .action_icon.flag').click(function() {
                    $(this).toggleClass('active');
                });
            } catch (e) {

            }
        }
    } catch (e) {

    }
}
enabled_actionicons();
/*===================================================
=           Advanced Search Click Event     =
===================================================*/
function moveHeader(header,pos,ul){
header.addClass('hiddenElement');
 $(ul[pos]).after("<li id='movedHeader'>"+header.html()+"</li>");
}

function advanced_slideout() {
    var header = $('#advance-container .secondHeader').clone();
    // var header_html = $('#advance-container .secondHeader').html();

    try {
        if ('#advance-link') {
            try {
                $('#advance-link').click(function() {
                    
                    $('#advance-container').slideToggle("1000");
                    if ('#page_layout_page_template_pbJobSearch2_ulSearch') {
                        if ($('#advanced_form_block li').length == 0) {
                            var old_list = $('#page_layout_page_template_pbJobSearch2_ulSearch li.item');
                            moveHeader(header,5,old_list);
                            $('#advance-container').mouseover(function() {
                               if(0 == $('#movedHeader').length ) {
                                old_list = $('#page_layout_page_template_pbJobSearch2_ulSearch li.item');
                                moveHeader(header,5,old_list);
                                  }
                            });
                           
                        }
                    }
                     

                    if ('#page_layout_page_template_scJobCandidateSearch2_ulSearch') {
                        if ($('#advanced_form_block li').length == 0) {
                            var old_list = $('#page_layout_page_template_scJobCandidateSearch2_ulSearch li.item');
                            moveHeader(header,6,old_list);
                            $('#advance-container').mouseover(function() {
                              if(0 == $('#movedHeader').length ) {
                                old_list = $('#page_layout_page_template_scJobCandidateSearch2_ulSearch li.item');
                                moveHeader(header,6,old_list);
                                }
                            });
                           
                        }
                    }
                });
                $('#adv_back').click(function() {
                    $('#advance-container').slideToggle("1000");
                });
                $('#advance-link').onclick = function() {
                    $('#advance-container').slideToggle("1000");
                };
            } catch (e) {
                // console.log(('An error has occurred: ' + e.message));
            }
        }
    } catch (e) {
        // console.log(('An error has occurred: ' + e.message));
    }
}
advanced_slideout();
/*=============================================
=       Load Advance automatically           =
=============================================*/
function onload_advanced_slideout(){
    // console.log(window.location.search)
    if( 0 != window.location.search.length){
        if( '?advanced' == window.location.search ) {
                    // $('#advance-container').slideToggle("1000");
                    if ('#page_layout_page_template_pbJobSearch2_ulSearch') {
                        if ($('#advanced_form_block li').length == 0) {
                            var old_list = $('#page_layout_page_template_pbJobSearch2_ulSearch li.item');
                            for (var i = 0; i < 5; i++) {
                                $('#advanced_form_block').append(old_list[i]);
                            };
                        }
                    }

                $('#advance-container').slideToggle("1000");
                
        }
    }
}
onload_advanced_slideout();
/*===========================================================
=            Placeholder Please Select Dropdowns            =
===========================================================*/
$(document).ready(function() {
    try {
        //         $('.rcbScroll ul.rcbList li label').first().click();
        $('.select-field.select-field input.rcbInput').attr("placeholder", "Please Select");
    } catch (e) {
        // console.log(('An error has occurred: ' + e.message));
    }
});
/*===================================================
=  Accordion List Form for Job search Result Page.. =
===================================================*/
function expand_tr_section() {
    try {
        if ($('.listtable')) {
            try {
                $('.listtable tr:nth-child(2)').hide();
            } catch (e) {
                // console.log(('An error has occurred: ' + e.message));
            }
        };
        if ($('.accordionList')) {
            try {
                $('.accordionList .accordionItem.opened .accordion_ct').show();
                $('.accordionList .accordionItem .accordion_hd span').click(function() {
                    $(this).parent().next(".accordion_ct").slideToggle();
                    $(this).parent().parent('.accordionItem').toggleClass('opened');
                    $(this).parent().children('span').toggleClass('up');
                    $(this).parent().children('span').toggleClass('down');
                });
            } catch (e) {
                console.log(('An error has occurred: ' + e.message));
            }
        }
        if ($('.expand_job')) {
            var count = 0;
            $('.expand_job').click(function() {
                count++
                if (count == 1) {
                    $('.listtable tr:nth-child(2)').show();
                    $('.action_icon').addClass('open');
                    $('.expand_job').text("Collapse all jobs");
                    //console.log(count);
                } else {
                    $('.listtable tr:nth-child(2)').hide();;
                    $('.action_icon').removeClass('open');
                    $('.expand_job').text("Expand all jobs");
                    count = 0;
                    //console.log(count);
                }
            });
        }
        if ($('.expand_candidates')) {
            var count = 0;
            $('.expand_candidates').click(function() {
                count++
                if (count == 1) {
                    $('.listtable tr:nth-child(2)').show();
                    $('.action_icon').addClass('open');
                    $('.expand_candidates').text("Collapse all Candidates");
                    $('.expand_candidates').addClass('open');
                    //console.log(count);
                } else {
                    $('.listtable tr:nth-child(2)').hide();;
                    //$('.listtable:nth-child(odd) tr').show();
                    $('.action_icon').removeClass('open');
                    $('.expand_candidates').removeClass('open');
                    $('.expand_candidates').text("Expand all Candidates");
                    count = 0;
                    //console.log(count);
                }
            });
        }
    } catch (e) {
        console.log(('An error has occurred: ' + e.message));
    }
}

expand_tr_section();
/*======================================
=            replace all js            =
======================================*/

function replaceall(str,replace,with_this)
{
    var str_hasil ="";
    var temp;

    for(var i=0;i<str.length;i++) // not need to be equal. it causes the last change: undefined..
    {
        if (str[i] == replace)
        {
            temp = with_this;
        }
        else
        {
                temp = str[i];
        }

        str_hasil += temp;
    }

    return str_hasil;
}
function job_status_titles(wrapper, elements) {
    if ($(wrapper)) {
        try {
            $(elements).each(function() {
                var e = $(this);
                var licence = 0;
                var title = $.trim(e.attr('title'));
                if (e.hasClass('car')) {
                    var title = $.trim(e.attr('title'));
                    var new_title = title.split(':')[0];
                    var own_car = title.split(':')[1].split('#')[0];
                    licence = title.split(':')[1].split('#')[1];
                    var final_title;
                    // console.log('Lic '+licence+" Car "+own_car)
                    if (licence.length > 0 && own_car != 'css_false') {
                        final_title = "Own Vehicle & Licence: " + licence;
                    }
                    if (licence.length > 0 && own_car == 'css_false') {
                        final_title = "Licence: " + licence;
                    }
                    if (licence.length <= 0 && own_car != 'css_false') {
                        final_title = "Own Vehicle: Yes";
                    }
                    if (licence.length <= 0 && own_car == 'css_false') {
                        $(this).addClass('hiddenElement');
                    }
                    if (licence.trim() == "No License" && own_car == 'css_false') {
                        $(this).addClass('hiddenElement');
                    }
                    if (licence == "None" && own_car == 'css_false') {
                        $(this).addClass('hiddenElement');
                    }
                    e.attr('title', final_title);
                }
                var text_val = "Unknown";
                if (title != undefined && title.indexOf(':') > -1 && title.indexOf('#') == -1 && title.indexOf('/') == -1) {
                    var val = title.split(':')[1];
                    val = $.trim(val);
                    switch (val) {
                        case '0':
                        
                           e.attr('title', title.split(':')[0] + " : No");
                            break;
                        case '1':
                            e.attr('title', title.split(':')[0] + " : Yes");
                            break;
                        case '2':
                            e.attr('title', title.split(':')[0] + " : Would Consider");
                            break;
                            // 
                        case 'M':
                            // text_val = "Male";
                            e.attr('title', title.split(':')[0] + " : Male");
                            break;
                            // 
                        case 'F':
                            // text_val = "Female";
                            e.attr('title', title.split(':')[0] + " : Female");
                            break;
                            // 
                        case 'css_false':
                            // text_val = "No";
                            e.attr('title', title.split(':')[0] + " : No");
                            break;
                            // 
                        case 'css_true':
                            // text_val = "Yes";
                            e.attr('title', title.split(':')[0] + " : Yes");
                            break;
                            //
                        default:
                            // text_val = "No";
                            e.attr('title', title.split(':')[0] + " : No");
                    }
                    
                    }
                    if (title.indexOf('/') != -1) { 
                            var text;
                            var e = $(this);
                            var title = $.trim(e.attr('title'));
                            console.log(title);
                            console.log(title.replace('0', 'No'));
                
                            text = replaceall(title,'0', 'No');
                            text = replaceall(text,'1', 'Yes');
                            text = replaceall(text,'2', 'Would Consider');
                            e.attr('title', text);
                     }
               
            });
        } catch (e) {
            // console.log(('An error has occurred: ' + e.message));
        }
    } else {
        // console.log(false)
    }
}
job_status_titles('.listtable.candidate', '.listtable.candidate li a');
job_status_titles('#candidate_title_icons', '#candidate_title_icons a');
//if(resume_check != 1){$('#resume_download') }
/*==========  links buttons in a list with tab classes  ==========*/
var master_tab_index = 0;
var valueFields = true;
var tabsEnabled = true;

function canTabsRun() {
    var tabCheck = window.location.href;
    var Tabschecks = 0;
    if (tabCheck.indexOf('edit=True') != -1) {
        Tabschecks = 2;
    };
    if (tabCheck.indexOf('add-new-candidate') != -1) {
        Tabschecks += 1;
    };
    if (tabCheck.indexOf('candidates-add-supplementary') != -1) {
        Tabschecks += 1;
    };
    // console.log(Tabschecks)
    switch (Tabschecks) {
        case 1:
            tabsEnabled = false;
            break;
        case 2:
            tabsEnabled = true;
            break;
        case 0:
            tabsEnabled = true;
    }
    return tabsEnabled;
}

function profile_tabs(i) {
        try {
            if (tabsEnabled) {
                $('#listing_tabs button').each(function(index, element) {
                    //console.log(element);
                    //console.log(i);
                    if (index == i) {
                        //console.log(i)
                        master_tab_index = i;
                        if (valueFields == true) {
                            $(this).addClass('open_tab');
                        } else {}
                        if (i == 0) {
                            $('#back_button').removeClass('show');
                            //$('#page_layout_page_template_JobSearchMatchFromJobCandidateButton1_job-search-match-candidate').addClass('show');
                        } else {
                            $('#back_button').addClass('show');
                            //$('#page_layout_page_template_JobSearchMatchFromJobCandidateButton1_job-search-match-candidate').removeClass('show');
                        }
                        if (i == 6 || i == 0) {
                            $('#page_layout_page_template_JobSearchMatchFromJobCandidateButton1_job-search-match-candidate').addClass('show');
                        } else {
                            $('#page_layout_page_template_JobSearchMatchFromJobCandidateButton1_job-search-match-candidate').removeClass('show');
                        }
                        if (i == 6) {
                            //Candidate Profile
                            $('#resume_download').addClass('show');
                            $('#page_layout_page_template_superAmazingDownload').addClass('show');
                            //$('#page_layout_page_template_JobSearchMatchFromJobCandidateButton1_job-search-match-candidate').addClass('show');
                        } else {
                            //Candidate Profile
                            $('#resume_download').removeClass('show');
                            $('#page_layout_page_template_superAmazingDownload').removeClass('show');
                            //$('#page_layout_page_template_JobSearchMatchFromJobCandidateButton1_job-search-match-candidate').removeClass('show');
                        }
                        var checkUrl = window.location.href;
                        if (checkUrl.indexOf('supplementary') == -1) {
                            if (i == 4) {
                                //Add new Candidates
                                // console.log('removed show')
                                $('#next_button').removeClass('show');
                            } else {
                                $('#next_button').addClass('show');
                            }
                        } else {
                            if (i == 5) {
                                //Add new Candidates
                                // console.log('removed show')
                                $('#next_button').removeClass('show');
                            } else {
                                $('#next_button').addClass('show');
                            }
                        }
                    } else {
                        $(this).removeClass('open_tab')
                    }
                });
                $('.tab').each(function(index, element) {
                    if (index == i) {
                        $(this).addClass('show');
                    } else {
                        $(this).removeClass('show')
                    }
                });
            } else {
                alert('NOTE: TABs are currently disabled in this view.  Please click OK then navigate between TABs using the Next and Back buttons.')
            }
        } catch (e) {
            // console.log(('An error has occurred: ' + e.message));
        }
    }
    /*===============================================
    =            Check if tabs are allow            =
    ===============================================*/
profile_tabs(0);

function tab_controls() {
    var page_place = master_tab_index;
    var displayError = [];
    var errorFields = []
        //requiredFieldCheck(master_tab_index);
    function createErrors(bucket) {
        if (errorFields.length > 0) {
            $(bucket).css({
                display: 'block'
            });
            var list = $(bucket).append('<ul></ul>').find('ul');
            for (var i = 0; i < displayError.length; i++) {
                list.append('<li>' + displayError[i] + '</li>');
            }
        } else {
            list.empty();
        }
    }

    function clearErrors(bucket) {
        var list = $(bucket);
        list.html('');
    }

    function cleanArray(actual) {
            var newArray = new Array();
            for (var i = 0; i < actual.length; i++) {
                if (actual[i]) {
                    newArray.push(actual[i]);
                }
            }
            return newArray;
        }
        //Primary phone check
    function checkElementChange(id) {
        $(id).change(function(event) {
            master_tab_index = 0;
        });
    }
    checkElementChange('#page_layout_page_template_pbFormField5_ctl_contactphone_6e14');

    function requiredFieldCheck(i) {
        switch (i) {
            case 0:
                var requiredFields = [
                    
                    $('#page_layout_page_template_pbFormField1_ctl_firstname_6e14').val(),
                    $('#page_layout_page_template_pbFormField2_ctl_lastname_6e14').val(),
                    $('#page_layout_page_template_pbFormField5_ctl_contactphone_6e14').val(),
                    $('#page_layout_page_template_pbFormField3_ctl_locationaddress_6e14').val(),
                    $('#page_layout_page_template_LocationPostcode_ctl_locationpostcode_6e14').val(),
                    $('#page_layout_page_template_pbFormField10_ctl_licensetype_6e14_Input').val(),
                    $('#page_layout_page_template_LocationSuburb_ctl_locationsuburb_6e14').val(),
                    $('#page_layout_page_template_LocationState_ctl_locationstate_6e14').val()
                ];
                errorFields = ['First name is required', 'Last name is required','Primary Phone is required', 'Street Address is required', 'Postcode is required', 'License Type is required', 'Suburb is required', 'State is required'];
                for (i = 0; requiredFields.length > i; i++) {
                    if (requiredFields[i] == undefined) {}
                    if (requiredFields[i] == undefined) {
                        requiredFields[i] = false;
                    }
                    if (requiredFields[i].length <= 0) {
                        displayError.push(errorFields[i]);
                    } else {}
                }
                break;
            case 1:
                var requiredFields = [$('#page_layout_page_template_pbFormField13_ctl_careerobjectives_6e14').val(),
                    $('#page_layout_page_template_pbFormField14_ctl_careersummary_6e14').val(),
                    $('#page_layout_page_template_pbFormField15_ctl_careerskills_6e14').val(),
                    $('#page_layout_page_template_pbFormField16_ctl_desiredjobtitles_6e14').val(),
                    $('#page_layout_page_template_pbFormField17_ctl_desiredworktypes_6e14_Input').val(),
                    $('#page_layout_page_template_pbFormField18_ctl_desiredjoblocations_6e14_Input').val(),
                    $('#page_layout_page_template_pbFormField19_ctl_desiredindustries_6e14').val()
                ];
                errorFields = ['Career Objectives is required', 'Career Summary is required', 'Demonstrated Skills is required', 'Desired Job Titles is required', 'Desired Work Type is required', 'Desired Job Locations is required', 'Desired Industries is required'];
                for (i = 0; requiredFields.length > i; i++) {
                    if (requiredFields[i] == undefined) {}
                    if (requiredFields[i] == undefined) {
                        requiredFields[i] = false;
                    }
                    if (requiredFields[i].length <= 0) {
                        displayError.push(errorFields[i]);
                    }
                }
                break;
            case 4:
                // var requiredFields = [$('#page_layout_page_template_pbFormField41_ctl_references_6e14').val(),
                //     $('#page_layout_page_template_pbFormField40_ctl_references_6e14').val()
                // ];
                // errorFields = ['References is required'];
                // for (i = 0; requiredFields.length > i; i++) {
                //     // console.log(requiredFields[i])
                //     if (requiredFields[i] == undefined) {
                //         requiredFields[i] = false;
                //     }
                //     if (requiredFields[i].length <= 0) {
                //         displayError.push(errorFields[0]);
                //     } else {}
                // }
                break;
            default:
                var requiredFields = [
                    $('#page_layout_page_template_pbFormField1_ctl_firstname_6e14').val(),
                    $('#page_layout_page_template_pbFormField2_ctl_lastname_6e14').val(),
                    $('#page_layout_page_template_pbFormField3_ctl_locationaddress_6e14').val(),
                    $('#page_layout_page_template_LocationPostcode_ctl_locationpostcode_6e14').val(),
                    $('#page_layout_page_template_pbFormField10_ctl_licensetype_6e14_Input').val(),
                    $('#page_layout_page_template_LocationSuburb_ctl_locationsuburb_6e14').val(),
                    $('#page_layout_page_template_LocationState_ctl_locationstate_6e14').val()
                ];
                errorFields = ['First name is required', 'Last name is required', 'Street Address is required', 'Postcode is required', 'License Type is required', 'Suburb is required', 'State is required'];
                for (i = 0; requiredFields.length > i; i++) {
                    if (requiredFields[i] == undefined) {}
                    if (requiredFields[i] == undefined) {
                        requiredFields[i] = false;
                    }
                    if (requiredFields[i].length <= 0) {
                        displayError.push(errorFields[i]);
                        profile_tabs(0);
                    } else {}
                }
                break;
        }
    }
    $('#back_button').click(function() {
        tabsEnabled = true;
        requiredFieldCheck(master_tab_index);
        clearErrors('#page_layout_page_template_pbFormErrors1_ValidationSummary_Default');
        if (displayError.length == 0) {
            if (page_place != master_tab_index) {
                page_place = master_tab_index
            }
            if (page_place > 0) {
                page_place = page_place - 1;
                //console.log(page_place);
                if (page_place > 0) {
                    $('#back_button').addClass('show');
                } else {
                    $('#back_button').removeClass('show');
                }
                profile_tabs(page_place);
            }
        } else {
            createErrors('#page_layout_page_template_pbFormErrors1_ValidationSummary_Default')
        }
        displayError.length = [];
        tabsEnabled = false;
    });
    $('#next_button').click(function() {
        tabsEnabled = true;
        requiredFieldCheck(master_tab_index);
        clearErrors('#page_layout_page_template_pbFormErrors1_ValidationSummary_Default');
        if (displayError.length == 0) {
            if (page_place != master_tab_index) {
                page_place = master_tab_index
            }
            page_place = page_place + 1;
            if (page_place > 0) {
                $('#back_button').addClass('show');
            } else {
                $('#back_button').removeClass('show');
            }
            profile_tabs(page_place);
        } else {
            createErrors('#page_layout_page_template_pbFormErrors1_ValidationSummary_Default')
        }
        displayError.length = [];
        tabsEnabled = false;
    });
}
if ($('#tab_controls')) {
    tab_controls();
}
// Specialty role Interest function
function dropdownToBucket(dropdown, bucket, texttoadd) {
    $(dropdown).on('change', function() {
        var value = $(dropdown).val();
        var old_value = $(bucket).val();
        var new_value;
        if (old_value.length < 2) {
            var spacer = "";
        } else {
            var spacer = ", ";
        }
        if ($(this).val() > 0) {
            if (old_value.indexOf(texttoadd) > -1) {
                new_value = old_value;
            } else {
                var new_value = old_value + spacer + texttoadd;
            }
        } else {
            if (old_value.indexOf(texttoadd) > -1) {
                new_value = old_value.replace(texttoadd, '');
            }
            if (old_value.indexOf(spacer + texttoadd) > -1) {
                new_value = old_value.replace(spacer + texttoadd, '');
            }
        }
        if (new_value[0] == ',' || new_value[0] == ' ') {
            new_value = new_value.slice(1);
        }
        $(bucket).val(new_value);
    });
}
dropdownToBucket('#page_layout_page_template_pbFormField21_ctl_apprenticeshipinterest_6e14', '#page_layout_page_template_pbFormField20_ctl_specialtyroleinterest_6e14', 'Apprenticeship Interest');
dropdownToBucket('#page_layout_page_template_pbFormField24_ctl_weekendworkinterest_', '#page_layout_page_template_pbFormField20_ctl_specialtyroleinterest_6e14', 'Weekend Work Interest');
dropdownToBucket('#page_layout_page_template_pbFormField27_ctl_indigenousroleinterest_6e14', '#page_layout_page_template_pbFormField20_ctl_specialtyroleinterest_6e14', 'Indigenous Role Interest');
dropdownToBucket('#page_layout_page_template_pbFormField22_ctl_traineeshipinterest_6e14', '#page_layout_page_template_pbFormField20_ctl_specialtyroleinterest_6e14', 'Traineeship Interest');
dropdownToBucket('#page_layout_page_template_pbFormField25_ctl_fiforoleinterest_6e14', '#page_layout_page_template_pbFormField20_ctl_specialtyroleinterest_6e14', 'Fly in Fly Out Role Interest');
dropdownToBucket('#page_layout_page_template_pbFormField23_ctl_shiftroleinterest_6e14', '#page_layout_page_template_pbFormField20_ctl_specialtyroleinterest_6e14', 'Shift Role Interest');
dropdownToBucket('#page_layout_page_template_pbFormField26_ctl_labourhireroleinterest_6e14', '#page_layout_page_template_pbFormField20_ctl_specialtyroleinterest_6e14', 'Labor Hire Role Interest');
// function placeholdIt(e, type, message){
// switch (type) {
// case 'select':
//     $(e).append('<option disabled="disabled" selected="selected">'+message+'</option>');
//   break;
//   case 'textarea':
//     $(e).attr('placeholder', message);
//   break;
// default:
//     $(e).attr('placeholder', message); }
//     }
// //placeholdIt('.select-field', 'select', "Please Select");
// placeholdIt('.RadComboBox input.rcbInput.radPreventDecorate', 'input', "Please Select");
/*===========================================
=            Canidate Form Saver            =
===========================================*/
function saveForm(trigger,submit_button){
    $(trigger).click(function(event) {
        $(submit_button).click();
    });
}
saveForm('#save_now',"#page_layout_page_template_scJobCandidateMemberContentFormSubmit1_btnFormSubmit_Default");




/*==================================================================
=               ICON BUTTONS (eg Print, Back)            =
==================================================================*/
function top_nav_js() {
    try {
        $('.printer').click(function() {
            window.print();
        });
        $('.msg').click(function() {
            var section = window.location.pathname
            section = section.split('/');
            section = section[1].substring(0, section[1].length - 1);
            var addresses = window.prompt("Please type the email addresses you would like to send this to", "");
            var body = "Check out this " + section.trim() + " " + document.URL;
            if (body.slice(-1) == '#') {
                body = body.slice(0, -1);
            }
            var jobtitle = $('.wrpahead').text().split(')')[0].trim();
            // console.log(section)
            switch (section) {
                case 'candidate':
                    var section_mesage = "I found someone for you! - ";
                    break;
                case 'job':
                    var section_mesage = "I found a job for you! - ";
                    break;
                default:
                    break;
            }
            var subject = section_mesage.trim() + jobtitle.toUpperCase().trim();
            subject = subject.split('(').join('');
            subject = subject.split(')').join('');
            subject = subject.replace(/\s{2,}/g, ' ');
            var href = "mailto:" + addresses + "?" + "subject=" + subject.trim() + "&" + "body=" + body;
            var message;
            message = window.open(href, "_self", "scrollbars=yes,resizable=yes");
        });
        if ($(".open_tab").length != 0) {
            var open_tab = $(".open_tab").attr('onclick');
            var i = open_tab.match(/\d+/)[0];
            if (canTabsRun()) {
                profile_tabs(i);
            }
        }
    } catch (e) {
        console.log(('An error has occurred: ' + e.message));
    }
}
top_nav_js();
/*==================================================================
=               SAVE RTF FILES TO DESKTOP            =
==================================================================*/
function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}
function removeBreaks(className){

     $(className).each(function() {
            value = $(this).text();
            // console.log(value);
            var text_length = value.trim().length;
            if (text_length > 0) {
             var dirty = $(this).text();
             var clean = dirty.replace(/(\r\n|\n|\r)/gm," ");
            $(this).text(clean);
            }
        });
}
function generateResume(output_type) {
    $("#resume_import").find("*").not(':visible').remove();
    var filename = document.title;
    var employment_check = false;
    removeBreaks(".employment_history p");
    function createHeaders(line_text) {
        switch (line_text) {
            case 'Career Objective':
                document_text += '\\' + '\n';
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs26" + $.trim(lines[i]) + " " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Career Summary':
                document_text += '\\' + '\n';
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs26" + $.trim(lines[i]) + " " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Demonstrated Skills':
                document_text += '\\' + '\n';
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs26" + $.trim(lines[i]) + " " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Employment History':
                
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs26" + $.trim(lines[i]) + " " + '\\b0 \\ ';
                // document_text += '\\cf0 \\' + '\n';
                employment_check = true;
                break;
            case 'Education and Qualifications':
                employment_check = false;
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs26" + $.trim(lines[i]) + " " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'References Available':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs26" + $.trim(lines[i]) + " " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Other':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs26" + $.trim(lines[i]) + " " + '\\b0 \\ ';
           
                break;
            case 'Professional Certifications':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs22" + $.trim(lines[i]) + ": " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Professional Tickets':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs22" + $.trim(lines[i]) + ": " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Professional Licences':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs22" + $.trim(lines[i]) + ": " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Professional Memberships':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs22" + $.trim(lines[i]) + ": " + '\\b0 \\ ' + '\n';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Languages Spoken':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs22" + $.trim(lines[i]) + ": " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            case 'Other Requirements':
                document_text += '\\' + '\n';
                document_text += "\\ \\b\\fs22" + $.trim(lines[i]) + ": " + '\\b0 \\ ';
                document_text += '\\cf0 \\' + '\n';
                break;
            default:
                var clean_text = $.trim(lines[i]);
                if ($.trim(lines[i]).indexOf('’') > -1) {
                    clean_text = replaceAll("’", "'", $.trim(lines[i]))
                };
                if ($.trim(lines[i]).indexOf('–') > -1) {
                    clean_text = replaceAll("–", "-", $.trim(lines[i]))
                };
                document_text += "\\b0 \\fs22 " + clean_text + "\\" + '\n';
                
        }
        return document_text;
    }

    filename = replaceAll(" ", "_", filename);
    filename = replaceAll(":", "", filename);
    var employment_count = -1;
    var data_text = $('#resume').text() + $('#resume_extras').text();
    var lines = data_text.split('\n');
    var document_header = "{\\rtf1\\ansi\\ansicpg1252\\cocoartf1265\\cocoasubrtf190 {\\fonttbl\\f0\\fswiss\\fcharset0 Helvetica;} {\\colortbl;\\red255\\green255\\blue255;\\red74\\green19\\blue188;}" + '\n';
    var document_text = "\\pard\\pardirnatural\\qc \\f0\\b\\fs36" + "\\" + '\n' + "\\cf0 " + $.trim(lines[1]).toUpperCase() + "\\" + '\n' + ' \\fs22 \\cf0 ' + '\n';
    for (var i = 2; i < lines.length; i++) {
        if ($.trim(lines[i]).length > 0) {              
            createHeaders($.trim(lines[i]));

            if(employment_check){
            employment_count++;
            if(employment_count % 3 == 0){
               document_text += '\\' + '\n';
            }
          }
        }
        if (i == 15) {
            document_text += "\n" + "\\pard\\ " + "\n";
            document_text += '\\' + '\n';
        }
    }
    var doc = document_header + document_text + " }";
    if (output_type == "file") {
        var blob = new Blob([doc], {
            type: "text/rtf;charset='utf-8'"
        });
        saveAs(blob, filename + "_Resume.rtf");
        // });
    }
    if (output_type == "string") {
        return doc
    }
}
if ($('#resume_download').length > 0) {
    $('head').append('<script type="text/javascript" src="/site/DefaultSite/filesystem/scripts/Blob.js"></script>');
    $('head').append('<script type="text/javascript" src="/site/DefaultSite/filesystem/scripts/FileSaver.js"></script>');
    $(document).ready(function($) {
        $('#resume_download').click(function() {
            generateResume('file');
        });
    });
}
if ($("body").hasClass('ie9')) {
    $(document).ready(function($) {
        $('#page_layout_page_template_superAmazingDownload').hover(function() {
            $('#page_layout_page_template_resume_bucket').text(generateResume('string'));
        });
    });
}
/*==========  Hides Data ==========*/
/*=============================================
=            Hide active                    =
=============================================*/
if ((".listtable em strong")) {
    $(".listtable em strong").each(function() {
        // if($(this).text() == "(Active)"){
        if ($(this).text().indexOf("(Active)") >= 0) {
            $(this).text('')
        }
    });
}

function calcAge(dateString){
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}


function getYear(date) {
    var year;
    var split = date.split('/');
    if (split[2]) {
        year = split[2];
    } else {
        year = "Not a proper date";
    }
    return year;
}

function getAge(e, e_check, error_message, output_type) {
        if ($(e_check)) {
            $(e).each(function() {
                var dob = $(this).text();
                var age = calcAge(dob);
                $(this).text(age);
            });
        }
}



getAge('.dob', ".listtable.candidate", "-", "age");

function removeTime(e) {
        //Used with ModifiedTimeStamp for just date.
        var timestamp = $(e).text();
        var justdate = timestamp.split(" ");
        $(e).text(justdate[0]);
        //  Example: removeTime('.info_banner .modified');
    }
    /*=====================================
    =            Comma Checker            =
    =====================================*/
function checkComma(e) {
    $(e).each(function() {
        var dirty = $(this).text();
        if (dirty.indexOf(', ,') > -1) {
            var clean = dirty.split(', ,').join('');
            dirty = clean;
        }
        if (dirty.trim().charAt(0) == ',') {
            var clean = dirty.substr(1);
            dirty = clean;
        }
        if (dirty.trim().charAt(0) == ',') {
            var clean = dirty.substr(1);
            dirty = clean;
        }
        if (dirty.indexOf(',,') > -1) {
            var clean = dirty.substr(1);
            dirty = clean;
        }
        if (clean != undefined) {
            clean = clean.replace(/(^[,\s]+)|([,\s]+$)/g, '');
            $(this).text(clean);
        }
    });
}

function checkDash(e) {
    $(e).each(function() {
        var dirty = $(this).text();
        if (dirty.indexOf('—') > -1) {
            var clean = replaceall(dirty,'—','-');
            $(this).text(clean);
        }
    });
}

function checkBrack(e) {
    $(e).each(function() {
            var dirty = $(this).text();
            var child = $(this).find(".bracket");
            if (child.text().indexOf('()') != -1) {
                child.text("");
            }
    });
}

function checkOngoing(e) {
        $(e).each(function() {
            var dirty = $(this).text();
            var child = $(this).find(".enddate");
            if (child.text().indexOf('2020') != -1) {
                child.text("Ongoing");
            }
        });
}
  
    //replace 2020 to Ongoing
$(document).ready(function() {
    checkOngoing('.edc_qual strong');
    checkOngoing('.brack_checker');
});
//Remove empty brackets
checkBrack('.edc_qual strong');
checkBrack('.brack_checker');
//remove double commas
checkComma('.comma_checker');
//=======================PLACE HOLDER CROSS BROWSER================================
if ($('#labelsOn').length > 0) {
    $(function() {
        $(document).tooltip({
            position: {
                my: "left top"
            },
        });
    });
    $('input[type="text"]').each(function(i, el) {
        if (el.value.indexOf("#") != -1) {
            //console.log(el.value)
            el.title = el.value.substring(1);
            el.value = "";
        }
    });
    $('textarea').each(function(i, el) {
        if (el.value.indexOf("#") != -1) {
            el.title = el.value.substring(1);
            el.value = "";
        }
    });
    $('td').each(function(i, el) {
        if (el.title) {
            el.title = '';
        }
    });
}

function DateToday() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = dd + '/' + mm + '/' + yyyy;
        return today
    }
    /*========================================
    =            PreFill Fuctions            =
    ========================================*/

// function removeDateInactive(page){
//     var h1 = $('h1.wrpahead')[0];
//         if ($(h1).text() == page) {

//         var href = window.location.href;
//         console.log( href);

//         if (href.indexOf('dataid') > -1) {
            
//             $('#page_layout_page_template_pbFormField10_ctl_dateinactive_d7dc_dateInput').val('');
//             $('#page_layout_page_template_pbFormField8_ctl_datecreated_d7dc_dateInput').val(DateToday());
           
//         }
//     }
// }
// removeDateInactive('ADD NEW JOB');

function shouldnSee(con, equals, e) {
    if (con == equals) {
        $(e).addClass('hiddenElement');
    } else {}
}
if ($('.prefill')) {
    var prefillAllowed = window.location.search;
    prefillAllowed = prefillAllowed.indexOf('dataid=');
    // console.log(prefillAllowed);
    shouldnSee(prefillAllowed, 1, '.prefill_wrap button');
    shouldnSee(prefillAllowed, 1, 'input.openCopyJob');
}

function preFill(from, to) {
    var value = document.getElementById(to).value;
    if (value.length > 0) {
        alert("No infomation to copy")
    } else {
        document.getElementById(to).value = document.getElementById(from).value;
    }
}

function preFillMulti() {
    var final_content = "";
    var to = "";
    for (var i = 0; i < arguments.length - 1; i++) {
        if (document.getElementById(arguments[i])) {
            var value = document.getElementById(arguments[i]).value;
            if (value.length > 0) {
                final_content += document.getElementById(arguments[i]).value + " "
            };
        }
    }
    document.getElementById(arguments[arguments.length - 1]).value += " " + final_content;
}

function ToApplySelector() {
    if ($('#contactselector').length > 0) {
        var spans = $('#contactselector span');
        var applyType = spans[0].innerHTML;
        var applyToText;
        // console.log(spans);
        if (spans[0].innerHTML.length > 1) {
            switch ($.trim(applyType)) {
                case 'Email':
                    applyToText = 'Email - ' + spans[2].innerHTML;
                    break;
                case 'Send':
                    applyToText = 'Email - ' + spans[2].innerHTML;
                    break;
                case 'Contact Us':
                    applyToText = 'Phone - ' + spans[1].innerHTML;
                    break;
                case 'Form':
                    applyToText = 'Email - ' + spans[2].innerHTML;
                    break;
                case 'Phone':
                    applyToText = 'Phone - ' + spans[1].innerHTML;
                    break;
                case 'Fax':
                    applyToText = 'Fax - ' + spans[3].innerHTML;
                    break;
                case 'Fax ':
                    applyToText = 'Fax - ' + spans[3].innerHTML;
                    break;
                default:
                    applyToText = 'This infomation is currrently unavailable';
                    break;
            }
        } else {
            applyToText = "This infomation is currrently unavailable"
        }
        $('#contactselector').text(applyToText);
    }
}
ToApplySelector();
/*====================================================
=    Make the focused Input re-act to enter         =
====================================================*/
// assumes jQuery is included
function EnterSearch(wrapper, input, button) {
    // cache DOM references
    var searchContainer = wrapper,
        searchInput = input,
        searchContainer,
        searchButton = button,
        searchContainer;
    // detect when enter is pressed
    $(document).keydown(function(e) {
        // check if focused in the search input field
        if (searchInput.is(':focus')) {
            // if ENTER key is pressed
            if (e.keyCode == 13) {
                e.preventDefault(); // cancel form submission
                searchButton.click();
                // console.log() // simulate the search button click
            }
        }
    })
};
EnterSearch($('.side-nav-searchwrap'), $('.searchfield-sidenav'), $('.searchbutton-sidenav'));
EnterSearch($('.pbJobSearch'), $('.textbox'), $('input.button'));
/*===================================
=            Get Data ID            =
===================================*/
function getDataId(starturl) {
        var url = window.location.pathname;
        var href = window.location.href;
        // console.log(href)
        var suffix = '';
        if (href.indexOf('edit=True') > -1) {
            suffix = 'edit=True';
        }
        //var folder = '/' + url.split('/')[1] + '/';
        //var dataId = window.location.search;
        var dataId = "?" + href.split('?')[1];
        var finalUrl;
        if (dataId.indexOf('&') > -1) {
            dataId = dataId.split('&')[0];
        }
        //finalUrl = window.location.origin + folder + 'add-new-candidate' +dataId + starturl;
        finalUrl = url + dataId + starturl;
        window.location.replace(finalUrl);
        //window.location.replace( finalUrl );
    }
    /*=======================================================
    =   Add New Can     Onging - Convert 2020 to Ongoing    =
    =======================================================*/
function OngoingSelect(page, select_e, new_val, new_name) {
    try {
        var h1 = $('h1.wrpahead')[0];
        if ($(h1).text() == page) {
            var options = $(select_e + ' option');
            $(options).each(function(index) {
                var name = $(this).text();
                var value = $(this).val();
                if (value == "2020" && name != "Ongoing") {
                    $(this).text(new_name);
                    $(this).val(new_val);
                }
            });
        }
    } catch (e) {
        //console.log(('An error has occurred: ' + e.message));
    }
}
try {
    function waitOngoing() {
        OngoingSelect('New Candidates Profile', '.select-field', '2020', 'Ongoing');
        
    }
    $('#page_layout_page_template_scJobCandidateEmploymentHistoryList1_btnAddMore').click(function(event) {
        setTimeout(waitOngoing, 1);
    });
    $('#page_layout_page_template_scJobCandidateEducationQualificationList1_btnAddMore').click(function(event) {
        setTimeout(waitOngoing, 1);
    });
    OngoingSelect('New Candidates Profile', '.select-field', '2020', 'Ongoing');
    $(document).on("hover", ".candidates_table.fullwidther.form_table", function() {
        OngoingSelect('New Candidates Profile', '.select-field', '2020', 'Ongoing');
    });
} catch (e) {
    // console.log(('An error has occurred: ' + e.message));
}
/*==================================
=            IANS FIXES            =
==================================*/
// FIX COMBOBOX TELERIK CONTROLS
$('input[name$="AutoComplete"]').change(function(e) {
    var $this = $(this),
        html = $this.val(), // html content as text
        $html = $(html); // html content as jQuery object
    // if there is an unparsed html table inside..
    if ($html.is('table')) $this.val($html.find('.Suburb').text());
});
/*==================================
=           MOBILE NAV           =
==================================*/
$(document).ready(function() {
    //console.info('Mobile Function Enabled = ' + MobileEnabled);
    if (MobileEnabled != false) {
        /*==========  Mobile Nav Button  ==========*/
        function showMenu(selector, toggled_id, breakpoint) {
            var width = $(window).width() / parseFloat($("body").css("font-size"));
            if (width <= breakpoint) {
                $(toggled_id).slideUp(400);
                $(selector).click(function(event) {
                    $(toggled_id).slideToggle(400);
                });
            } else {
                // console.log(width);
            }
        }
        showMenu('#mobilenav-trigger', "#nav", "35.75");
        showMenu('.side-nav-searchwrap', ".side-nav-searchwrap .search_job", "48");
        showMenu('.side-nav-searchwrap', ".side-nav-searchwrap .search_candidate", "48");
        showMenu('#category_title', '#slide_up', '48');
        showMenu('div.side-nav', "ul.side-NavSMT", "48");
        showMenu('div.side-nav', "div.side-NavSMT", "48");
        showMenu('div.side-nav', "ul.trining-listing", "48");
        showMenu("#more_options", '.sidebar .accordionList', "48");
        showMenu("#more_options", '.sidebar .accordionList_ft', "48");
        showMenu("#more_options", '.sidebar .more_optns', "48");
        // if(navigator.userAgent.match(/iPad/i) != null){
        // }
    }
    if (MobileEnabled != false) {
        function showTitle(e) {
            $(e).click(function(event) {
                $(document).tooltip({
                    position: {
                        my: "right bottom"
                    },
                });
            });
        }
        showTitle('a.job_status_icon');
    }
});
/*=========================================
=            Resume Extra Info            =
=========================================*/
function hideOtherTitle(wrap, title, child) {
    try {
        $(wrap).each(function() {
            var value = 0;
            value = $(this).find(child).text();
            // console.log(value);
            var text_length = value.trim().length;
            if (text_length > 0) {
                $(this).find(title).addClass('show');
                $(this).find(child).addClass('show');
            }
        });
    } catch (e) {
        // console.log(('An error has occurred: ' + e.message));
    }
}



hideOtherTitle('#resume li', 'p', 'p');
hideOtherTitle('#resume_extras li', 'span', 'p');
hideOtherTitle('li.other-list', 'strong', 'p');

function resume_pruner() {
    if ('#profile_wrapper') {
        if ($('.edc_qual')) {
            try {
                var c = 0;
                c = $('.edc_qual').find('span').length;
                // console.log(c);
                if (c > 1) {
                    $('.edc_qual').remove()
                }
            } catch (e) {
                // console.log(('An error has occurred: ' + e.message));
            }
        }
        if ($('.employment_history')) {
            try {
                var c = 0;
                c = $('.employment_history').find('span').length;
                // console.log(c);
                if (c > 1) {
                    $('.employment_history').remove()
                }
            } catch (e) {
                // console.log(('An error has occurred: ' + e.message));
            }
        }
        if ($('.other-list.list-item p')) {
            try {
                $('.other-list.list-item p').each(function() {
                    if ($(this).hasClass('show')) {
                        $('.other-list.title span').addClass('show');
                    } else {
                        $(this).parent('.other-list.list-item').remove();
                        //$(this).remove();
                    }
                });
            } catch (e) {
                // console.log(('An error has occurred: ' + e.message));
            }
        }
    }
}
resume_pruner();

// function alphanumeric(e) {
//     var inputtxt = $(e).text
//     var letters = /^[0-9a-zA-Z]+$/;
//     if (inputtxt.match(letters)) {
//      $(e).addClass('show');
//         return true;
//     } else {
//          $(e).removeClass('show');
//     }
// }





function removeCoal(resume) {
        $(resume).each(function() {
            var this_text = $.trim($(this).text())
            if (this_text == ":") {
                $(this).text('');
            }
        });
    }
    // alphanumeric('#resume li p');
removeCoal('#resume li p');
/*=========================================
=            Loading Animation            =
=========================================*/
function loadingTrigger(id) {
        $(id).click(function(event) {
            /* Act on the event */
            $('body').append("<div id='purple-screen'><i id='loader'></i></div>");
        });
    }
    // ISSUE NOT APPROVED YET
    // loadingTrigger('#page_layout_page_template_pbJobSearch1_btnSearch')
    // loadingTrigger('#page_layout_page_template_pbJobSearch1_btnSearch');
    // loadingTrigger('#page_layout_pbAdvBasicSearch1_ctl00_SearchButton_SearchButton_button');
    // loadingTrigger('#page_layout_page_template_scJobCandidateSearch1_btnSearch');
    /*=========================================
    =        GA    Filter Out Year           =
    =========================================*/
function getYear(date) {
        var year;
        var split = date.split('/');
        if (split[2]) {
            year = split[2];
        } else {
            year = "Not a proper date";
        }
        return year;
    }
    /*=========================================
    =        GA    Filler User                =
    =========================================*/
function getUsername(userrole) {
    var user;
    if (true) {} else {};
    return user;
}

/*=========================================
=            Add new job form				=
=			Site code population 			=
=========================================*/
$("#sitepicker select").change(function() {
	if(mySites != null) {
		var sel = $( this ).val();
		var code = mySites[sel];
		if(code != "") {
			$("#sitecode input").val(code);
		}
	}
}); 
/*============================================
=            Error Alert Function            =
============================================*/
function resumeUploadFail(){
    $('input.ruButton.ruBrowse').click(function(event) {
        /* Act on the event */
   if($('span.ruUploadProgress').hasClass('ruUploadFailure')){
    alert('An error occurred. Please check your document is not too large (max 200KB) and of the correct file format (pdf, jpg, png)');
    } 
});
}

/*=============================================
=         Session Timeout Warning            =
=============================================*/
function timeoutMessage() {
    alert('Warning it has been 1 hour 30 minutes secs better save now');
}
function timeout(page){
    var h1 = $('h1.wrpahead')[0];
if ($(h1).text() == page) {
setTimeout(timeoutMessage,4800000);
}
}
timeout('New Candidates Profile');
/*==============================================
=            Prevent Blank Searches            =
==============================================*/
function stopSearch(button,input){
 var the_input = $(input);
  var the_button = $(button);
  var result;
  // console.log(the_input);
    if(the_input.val() == undefined || 0 == the_input.val().length || the_input.val() == -1 || the_input.val() == '00000000-0000-0000-0000-000000000000' ){
      the_button.prop( "disabled", true);
      the_button.addClass('disabledcursor');
      result = true;
     
    } else { 
        the_button.removeProp('disabled'); 
        the_button.removeClass('disabledcursor');
       result = false;
    }
 return result;
}

function stopSearchMulti(button,input_array){
 var the_input_array = [];
  var the_button = $(button);
  for (var i = input_array.length - 1; i >= 0; i--) {
    the_button.removeClass('disabledcursor');
    // console.log($(input_array[i]).val())
    the_input_array.push(stopSearch(the_button,$(input_array[i])));

    };
  for (var i = the_input_array.length - 1; i >= 0; i--) {
    // console.log(the_input_array)
  if(the_input_array[i] == false){
    the_button.removeClass('disabledcursor');
    the_button.removeProp('disabled'); 
    return false;

         }
    }
 return true;

}



/*==============================================
=    Prevent Blank Searches DElcartions        =
==============================================*/
if($('#page_layout_page_template_pbJobSearch1_btnSearch').length > 0 || $('#home_page_search').length > 0 ){
//Job  search
stopSearchMulti('#page_layout_page_template_pbJobSearch1_btnSearch',['#page_layout_page_template_pbJobSearch1_ctlSearch_keyword','#page_layout_page_template_pbJobSearch1_ctlSearch_locationpostcode_Input','#page_layout_page_template_pbJobSearch1_ctlSearch_maxmanagingsite','#page_layout_page_template_pbJobSearch1_ctlSearch_worktype']);
$('.job_search').mouseover(function() { 
stopSearchMulti('#page_layout_page_template_pbJobSearch1_btnSearch',['#page_layout_page_template_pbJobSearch1_ctlSearch_keyword','#page_layout_page_template_pbJobSearch1_ctlSearch_locationpostcode_Input','#page_layout_page_template_pbJobSearch1_ctlSearch_maxmanagingsite','#page_layout_page_template_pbJobSearch1_ctlSearch_worktype']);
});
//Browse Jobs
$('.pbJobSearch').mouseover(function() { 
stopSearchMulti('#page_layout_page_template_pbJobSearch1_btnSearch',['#page_layout_page_template_pbJobSearch1_ctlSearch_keyword','#page_layout_page_template_pbJobSearch1_ctlSearch_locationpostcode_Input','#page_layout_page_template_pbJobSearch1_ctlSearch_maxmanagingsite','#page_layout_page_template_pbJobSearch1_ctlSearch_worktype']);
});
//Home Quick Search
$('.main-cnt-home').mouseover(function() {
stopSearchMulti('#page_layout_page_template_ctl01_pbJobSearch1_btnSearch',['#page_layout_page_template_ctl01_pbJobSearch1_ctlSearch_keyword','#page_layout_page_template_ctl01_pbJobSearch1_ctlSearch_locationpostcode_Input','#page_layout_page_template_ctl01_pbJobSearch1_ctlSearch_maxmanagingsite','#page_layout_page_template_ctl01_pbJobSearch1_ctlSearch_worktype']);
});
}


if($('#page_layout_page_template_scJobCandidateSearch1_btnSearch').length > 0 || $('#page_layout_page_template_scJobCandidateSearch1_btnSearch').length > 0 ){
//CANDIDATES
stopSearchMulti('#page_layout_page_template_scJobCandidateSearch1_btnSearch',['#page_layout_page_template_scJobCandidateSearch1_ctlSearch_keyword','#page_layout_page_template_scJobCandidateSearch1_ctlSearch_locationpostcode_Input','#page_layout_page_template_scJobCandidateSearch1_ctlSearch_maxsite']);
//Candiadate Search
$('.searchwrapper.candidate_backing').mouseover(function() { 
stopSearchMulti('#page_layout_page_template_scJobCandidateSearch1_btnSearch',['#page_layout_page_template_scJobCandidateSearch1_ctlSearch_keyword','#page_layout_page_template_scJobCandidateSearch1_ctlSearch_locationpostcode_Input','#page_layout_page_template_scJobCandidateSearch1_ctlSearch_maxsite']);
});
//Browse Candidates
$('.sidebar.candidate_backing').mouseover(function() { 
stopSearchMulti('#page_layout_page_template_scJobCandidateSearch1_btnSearch',['#page_layout_page_template_scJobCandidateSearch1_ctlSearch_keyword','#page_layout_page_template_scJobCandidateSearch1_ctlSearch_locationpostcode_Input','#page_layout_page_template_scJobCandidateSearch1_ctlSearch_maxsite']);
});
}






//DEUBG

// $('input').mouseover(function() {
//    console.log(this.id);
// });
// $('select').mouseover(function() {
//    console.log(this.id);
// });


//Job Advanced Search
// stopSearchMulti('#page_layout_page_template_pbJobSearch2_btnSearch',['#page_layout_page_template_pbJobSearch2_ctlSearch_keyword',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_locationpostcode_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_postcodedistances',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_category1',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_worktype_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_maxmanagingsite_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_clienttype_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_timeactive',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_apprenticeshiproles',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_traineeshiproles',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_indigenous',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_flyinflyoutrole',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_shiftworkrole',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_weekendworkrole',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_cranehoistlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_loadshiftinglicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_motorvehiclelicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_pressureequipmentlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_publictransportlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_s caffoldinglicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_otherlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_otherrequirements_Input']);


// $('#advance-container').mouseover(function() { 
// stopSearchMulti('#page_layout_page_template_pbJobSearch2_btnSearch',['#page_layout_page_template_pbJobSearch2_ctlSearch_keyword',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_locationpostcode_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_postcodedistances',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_category1',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_worktype_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_maxmanagingsite_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_clienttype_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_timeactive',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_apprenticeshiproles',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_traineeshiproles',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_indigenous',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_flyinflyoutrole',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_shiftworkrole',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_weekendworkrole',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_cranehoistlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_loadshiftinglicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_motorvehiclelicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_pressureequipmentlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_publictransportlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_scaffoldinglicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_otherlicense_Input',
// '#page_layout_page_template_pbJobSearch2_ctlSearch_otherrequirements_Input']);
// });













