# Settings, and Theme for EliteSearch.online

> This repo serves the purpose of holding the static, theme, and settings file(s) so that they can be quickly updated or redeployed if needed or to restart EliteSearch.online.
> 
> If you find this repo helpful or like the style of EliteSearch, please feel free to use it for your own SearXNG instances. 

## <u>Installation Instructions</u>

> The files assume that you will be using the docker version of SearXNG, you should still be able to technically use the theme files for non-docker versions, but this installation will not cover how to install it. Though technically speaking, it should be relatively the same process.

1. Install [GitHub - searxng/searxng-docker](https://github.com/searxng/searxng-docker) from the following repo and follow all instructions on their [README.md](https://github.com/searxng/searxng-docker/blob/master/README.md)

2. Once you have installed SearXNG clone this repo to another folder, or download the .zip file.

3. Extract and copy the static/themes/elitesearch to /usr/local/searxng/static/themes/elitesearch

4. Extract and copy the templates/elitesearch to /usr/local/searxng/templates/elitesearch

5. ***Optional*** - Copy and replace the Caddyfile, to include the X-Real-IP header.  Mandatory for elitesearch.online rebuilds, or elitesearch.online backups

6. **_Optional_** - Review and copy the searxng/settings.yaml to /usr/local/searxng/searxng/settings.yaml (This is mandatory elitesearch.online rebuilds, or elitesearch.online backups.)
   
   1. **_If you have copied this, you will want to replace the secret_key with something else.  You can do this by running the following_**
   
   2. ```bash
      sed -i "s|ultrasecretkey|$(openssl rand -hex 32)|g" searxng/settings.yml
      ```

7. Open docker-compose.yaml and under the Volumes section add the following:
   
   ```yaml
     - ./static/themes/elitesearch:/usr/local/searxng/searx/static/themes/elitesearch
     - ./templates/elitesearch:/usr/local/searxng/searx/templates/elitesearch
   ```

_Keeping in mind that if you changed the theme/template from elitesearch you would want to update this to your name that you named the template/theme._

## <u>Recommended Secure Server</u>

It's also important to go ahead and secure your server to your liking or perferences, for options you can use something like [DevSec Hardening Framework · GitHub](https://github.com/dev-sec)

## <u>Todo</u>

- [ ] Complete re-skinning of the search page. 

- [ ] Clean up files, and remove un-needed/un-wanted files. 

- [ ] Develop more EliteSearch theme varients, (Design will stay the same, logo/colors will change.)
