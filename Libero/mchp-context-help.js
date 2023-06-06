( function() {  var mapping = [{"appname":"", "appid":"liberohelp", "path":"GUID-46C62B2B-C0F5-4745-A239-30359ACE975F.html"},{"appname":"", "appid":"libero_design_flow", "path":"GUID-D3BE74A4-8846-442A-9F67-834757001FE2.html"},{"appname":"", "appid":"libero_smartdesign", "path":"GUID-D6C8FB9D-ADD4-4049-80BA-384419E2D7BE.html"},{"appname":"", "appid":"libero_nlv", "path":"GUID-D94007C1-0B6E-4334-ADEB-CFEBF4720193.html"},{"appname":"", "appid":"libero_chip_planner", "path":"GUID-CB6776E3-CA38-4648-8851-E8AA02A71A5F.html"},{"appname":"", "appid":"libero_pf_pdc", "path":"GUID-6A5B14AF-39E9-4253-BF83-0C1A6025FBCE.html"},{"appname":"", "appid":"libero_timing_constraints", "path":"GUID-0762AE7A-5D6B-420E-9D05-1D0EE8C92015.html"},{"appname":"", "appid":"libero_flashpro", "path":"GUID-E29B8E54-4CD2-4854-A63B-1B18D4B17A0D.html"},{"appname":"", "appid":"libero_spps", "path":"GUID-800C7F69-3DF8-403F-8D5C-EC2DA2D2CFE5.html"},{"appname":"", "appid":"libero_smartdebug", "path":"GUID-5AD63D11-4351-4BE1-8AC4-45142AFC5E89.html"},{"appname":"", "appid":"libero_job_mgr", "path":"GUID-EC96DE03-40C0-44F0-8D55-29B2A6682954.html"},{"appname":"", "appid":"libero_pf_mlg", "path":"GUID-FCAAF92F-8261-4ED7-B44E-A8742CEA0859.html"},{"appname":"", "appid":"pf_custom_flow", "path":"GUID-81D89143-7721-417B-9A7C-FE911F855C5E.html"},{"appname":"", "appid":"libero_sf2_mlg", "path":"GUID-F5A1B855-E988-48B2-A29C-ADA050A6A95B.html"},{"appname":"", "appid":"libero_mss_simulation", "path":"GUID-A3BE55C2-E7D7-4BA1-868F-50D40539557F.html"},{"appname":"", "appid":"libero_mss_configurator", "path":"GUID-8F623149-225E-4A84-8BC9-3142A409FAD4.html"},{"appname":"", "appid":"libero_smartpower", "path":"GUID-9A0E67E1-13F5-4140-92B6-4829C11F6991.html"},{"appname":"", "appid":"libero_tcl_cmd", "path":"GUID-E81358E3-CE5A-43CA-AD69-88CE30DD4E28.html"},{"appname":"", "appid":"libero_smarttime_sta", "path":"GUID-7F57BCC7-CF46-4183-A20E-A841B92323C3.html"},{"appname":"", "appid":"libero_io_editor", "path":"GUID-E78D5FFC-5EE9-4357-B323-0C2542D77E05.html"},{"appname":"", "appid":"libero_sf2_pdc", "path":"GUID-1D299B8E-92B4-431E-B1F1-CCCDF490193E.html"},{"appname":"", "appid":"libero_nlv_interface", "path":"GUID-232B70EB-57FD-43AA-8B42-DE9F514AD347.html"},{"appname":"", "appid":"libero_linux_setup", "path":"GUID-00AC7215-5AFA-49E3-B91B-62F8F2835ACD.html"},{"appname":"", "appid":"Whlp_ide_IDD_NEW_PROJECT_WIZARD_DEVICE_SELECTION", "path":"GUID-44DCDF4C-5DB7-44FC-BCCC-C52326F39438.html"},{"appname":"", "appid":"libero_installation_licensing", "path":"GUID-F4DA9B8C-A57C-4789-9E76-B9414C7CF2BD.html"},{"appname":"", "appid":"Whlp_ide_IDD_NEW_PROJECT_WIZARD_DEVICE_SETTINGS", "path":"GUID-DCBABD25-B7D6-4950-9B0F-078AB62B1608.html"},{"appname":"", "appid":"Whlp_ide_IDD_NEW_PROJECT_WIZARD_NAME_LOCATION", "path":"GUID-1C4DA946-C3F4-47E8-8F91-85A784840E58.html"},{"appname":"", "appid":"Whlp_ide_IDD_NEW_PROJECT_WIZARD_ADD_HDL_SOURCES", "path":"GUID-C0B72183-D3F1-4225-9B1A-9498A28AD292.html"},{"appname":"", "appid":"libero_custom_flow", "path":"GUID-275B07BD-027C-4116-9CE0-C1D23508097F.html"},{"appname":"", "appid":"libero_rtg4_mlg", "path":"GUID-890346A8-405F-4C2B-A8AE-6FBA92D06197.html"},{"appname":"", "appid":"libero_design_separation_methodology", "path":"GUID-131B6EA5-C4CE-4B56-9546-7B6F0DEA140D.html"}];
            var mchp = (function (mchp) {
                var mchp = mchp || {};
                var mapping = [];
        
                mchp.utils = {};
        
                mchp.utils.getQueryParam = function (name, url = window.location.href) {
                  name = name.replace(/[\[\]]/g, "\\$&");
                  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                  if (!results) return null;
                  if (!results[2]) return "";
                  return decodeURIComponent(results[2].replace(/\+/g, " "));
                };

                mchp.utils.isFirefox = typeof InstallTrigger !== 'undefined';
        
                mchp.init = function (options) {
                  mchp.mapping = options.mapping || [];
                  mchp.bindEvents();
                };
        
                mchp.bindEvents = function () {
                    if (mchp.utils.isFirefox) {
                      window.onload = mchp.checkRedirect;
                    } else {
                      document.onreadystatechange = mchp.checkRedirect;
                    }
                };

                mchp.checkRedirect = function() {
                  var contextId = mchp.utils.getQueryParam("contextId") || "";
                  if (contextId && contextId != undefined) {
                    var record = mchp.mapping.find(function(x){
                      return x.appid && x.appid.toLowerCase() == contextId.toLowerCase();
                    });
                    if (record && record.path) {
                      window.stop();
                      window.location = record.path;
                    }
                  }
                };
        
                return {
                  init: mchp.init,
                };
              })();
        
              mchp.init({
                mapping: mapping
              });

        })();