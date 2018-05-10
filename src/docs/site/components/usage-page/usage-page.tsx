import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { QueueApi } from '@stencil/core/dist/declarations';
import content from './content';


interface IconData {
  name: string,
  icons: Array<string>,
  tags: Array<string>
}

@Component({
  tag: 'usage-page',
  styleUrl: 'usage-page.scss'
})
export class UsagePage {
  @Prop({ context: 'queue'}) queue: QueueApi;

  @State() exampleType: string = 'md';
  @State() exampleIcon: string = 'heart';

  @Prop() match: MatchResults;
  @Prop() data: any;

  componentWillLoad() {
    if(!window.location.hash) return;

    let iconNames = [];
    this.data.icons.map((o) =>{
      iconNames = iconNames.concat(o.icons)
    })

    const hash = window.location.hash.replace('#', '')

    if (iconNames.includes(hash)) {
      const splt = hash.split('-');
      this.exampleType = splt[0];
      this.exampleIcon = splt[1];
    }
  }

  componentDidLoad() {
    // this.queue.read(function() {
    //   console.log('offset ', document.getElementById('basic-usage').offsetTop)
    // });

    if (window.location.hash) {
      setTimeout( () => {
        const offset = document.getElementById('basic-usage').offsetTop - 100;
        window.scrollTo({left: 0, top: offset, behavior: 'smooth'});
      }, 50);
    }
  }

  render() {
   return (
     <main>
       <div class="wrapper">
         <div class="container">
           <div class="content">
             { content(this.data.version, this.exampleType, this.exampleIcon) }
           </div>
         </div>
       </div>

       <footer-bar></footer-bar>
     </main>
   )
  }
}
