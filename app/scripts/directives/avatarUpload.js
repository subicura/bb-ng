'use strict';

angular.module('bbNgApp')
  .directive('avatarUpload', function (CONFIG, LoginInfo) {
    return {
      link: function postLink(scope, element, attrs) {
        var options = {
          runtimes:'html5, flash, silverlight, html4',
          max_file_size:'2mb',
          filters: [
              {title: "Image files", extensions: "jpg,jpeg,gif,png"}
          ],
          multi_selection:false,
          flash_swf_url: '/plugins/plupload/Moxie.swf',
          silverlight_xap_url: '/plugins/plupload/Moxie.xap',

          url: 'http://' + CONFIG['api_host'] + '/users/add_avatar.json',
          browse_button: "addAvatarBtn",

          headers: {
            "X-Auth-Email":LoginInfo.currentUser.email,
            "X-Auth-Token":LoginInfo.currentUser.auth_token
          }
        }
        
        // ladda setting
        element.addClass("ladda-button");
        element.attr("data-style", "expand-left");
        var ladda = Ladda.create( document.querySelector( '#addAvatarBtn' ) );

        // uploader setting
        var uploader = new plupload.Uploader(options);
        uploader.init();
        uploader.bind('FilesAdded', function(uploader, files) {
          uploader.start();
          ladda.start();
        });
        uploader.bind('UploadProgress', function(uploader, file) {
          ladda.setProgress(file.percent / 100.0);
        });
        uploader.bind('FileUploaded', function(uploader, file, response) {
            var res = $.parseJSON(response.response);
            scope.$apply(function() {
              LoginInfo.setAvatar(res.avatar_url);
            });
            ladda.stop();
        });
        uploader.bind('Error', function(uploader, error) {
            alert(error.message);
            ladda.stop();
        });
      }
    };
  });
