import React from 'react';
import './Title.css'
const Title = () => {
    return (
      <div className="mb-8 smflex  items-center gap-5 lg:flex ">
        <div className="w-20 h-20 token-bg bg-contain bg-no-repeat" />
        <div>
          <h1 className="font-poppins-bold text-3xl">$SERA Public <div className="pool-upcoming">TBA</div></h1>
          <div className="flex gap-[10px] gap-[20px]">
              <a
                href="https://syncera.io/"
                target="_blank"
                className="h-full hover:opacity-80"
              >
                <i class="fas fa-globe social-icon"></i>
              </a>
              <a
                href="https://twitter.com/Syncera_io"
                target="_blank"
                className="h-full hover:opacity-80"
              >
                <i class="fa-brands fa-twitter social-icon"></i>
              </a>
              <a
                href="https://t.me/syncera_io"
                target="_blank"
                className="h-full hover:opacity-80"
              >
                <i class="fa-brands fa-telegram social-icon"></i>
              </a>
              <a
                href="https://medium.com/@synceraio"
                target="_blank"
                className="h-full hover:opacity-80"
              >
                <i class="fa-brands fa-medium social-icon"></i>
              </a>    
            </div>

        </div>
      </div>
    );
}

export default Title;
