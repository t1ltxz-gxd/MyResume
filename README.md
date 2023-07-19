<div align="center">

[![Preview](public/assets/preview.gif)](https://github.com/tiIt-dev/MyResume)
</div>

# My Resume
[![Stars](https://custom-icon-badges.demolab.com/github/stars/tiIt-dev/MyResume?logo=star)](https://github.com/tiIt-dev/MyResume/stargazers')
[![Open issues](https://custom-icon-badges.demolab.com/github/issues-raw/tiIt-dev/MyResume?logo=issue)](https://github.com/tiIt-dev/MyResume/issues)
[![License](https://custom-icon-badges.demolab.com/github/license/tiIt-dev//MyResume?logo=law)](https://github.com/DenverCoder1/custom-icon-badges/blob/main/LICENSE?rgh-link-date=2023-03-15T18%3A10%3A26Z "license MIT")
[![Powered by React](https://custom-icon-badges.herokuapp.com/badge/-Powered%20by%20React-0d1620?logo=react)](https://github.com/nextcord/nextcord "Powered by React")
Website written in React
___

## 🧩 Installation
```
git clone https://github.com/tiIt-dev/MyResume 
cd MyResume
yarn
```

## ⚙ Customize
All of the data for the site is driven via a file at  `.src/data/data.tsx` This is where you'll find the existing content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the `dataDef.ts` file. Example images can be found at `src/images/` and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports.
## 🚀 Launch
Run `yarn dev`.

## ⁉ Hook up contact form
Due to the variety of options available for contact form providers, I've hooked up the contact form only so far as handling inputs and state. Form submission and the actual sending of the email is open to your own implementation. My personal recommendation for email provider is [Sendgrid.](https://sendgrid.com/)

### Make any other changes you like
Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling/data changes, feel free!

___

## 🌐 Deployment

Deploying your new site to Vercel is simple, and can be done by following their guide [here.](https://vercel.com/guides/deploying-nextjs-with-vercel) When you're all done and the build succeeds, you should be given a url for your live site, go there and you'll see your new personal resume website! Congratulations!

___



## 🤝 Contributing

Contributions are what make the open source community an amazing place to learn, be inspired, and create. 
Any contributions you make are **greatly appreciated**.

1. [Fork the repository](https://github.com/tiIt-dev/MyResume/fork)
2. Clone your fork `git clone https://github.com/tiIt-dev/MyResume.git`
3. Create your feature branch `git checkout -b AmazingFeature`
4. Stage changes `git add .`
5. Commit your changes `git commit -m 'Added some AmazingFeature'`
6. Push to the branch `git push origin AmazingFeature`
7. Submit a pull request

## ❤️ Credits

Released with ❤️ by [Tilt](https://github.com/tiIt-dev).
