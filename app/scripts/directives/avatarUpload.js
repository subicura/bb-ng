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
        
        var uploader = new plupload.Uploader(options);
        uploader.init();
        uploader.bind('FilesAdded', function(uploader, files) {
          uploader.start();
        });
        uploader.bind('FileUploaded', function(uploader, file, response) {
            var res = $.parseJSON(response.response);
            $('.avatar').attr('src', res.avatar_url.medium);
        });
        uploader.bind('Error', function(uploader, error) {
            alert(error.message);
        });
      }
    };
  });
