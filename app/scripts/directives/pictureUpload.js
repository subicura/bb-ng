'use strict';

angular.module('bbNgApp')
  .directive('pictureUpload', function (CONFIG, LoginInfo, $state) {
    return {
      link: function postLink(scope, element, attrs) {
        var group_id = $state.params.group_id;
        var bookkeeping_id =  attrs.bookkeepingId;
        var button_id = "addPictureBtn_" + attrs.bookkeepingId;
        element.attr('id', button_id);
        var options = {
          runtimes:'html5, flash, silverlight, html4',
          max_file_size:'2mb',
          filters: [
            {title: "Image files", extensions: "jpg,jpeg,gif,png"}
          ],
          multi_selection:true,
          flash_swf_url: '/plugins/plupload/Moxie.swf',
          silverlight_xap_url: '/plugins/plupload/Moxie.xap',

//          url: 'http://' + CONFIG['api_host'] + '/groups/:group_id/bookkeepings/:id/add_proof.json',
          url: 'http://' + CONFIG['api_host'] + '/groups/' + group_id + '/bookkeepings/' + bookkeeping_id + '/add_proof.json',
          browse_button: button_id,

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
          console.log(res);
          scope.bookkeeping.proofs.push(res);
          console.log( scope.bookkeeping.proofs);
        });
        uploader.bind('Error', function(uploader, error) {
          alert(error.message);
        });
      }
    };
  });
