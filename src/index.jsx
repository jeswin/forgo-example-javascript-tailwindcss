import { mount } from "forgo";
import { white } from "tailwindcss/colors";

export function TailwindCSSExamples(props) {
  return {
    render(props, args) {
      return (
        <div>
          <h1 style={{ textAlign: "center", padding: "3em" }}>
            Forgo Tailwind CSS Examples
          </h1>
          <div style={{ maxWidth: "600px", margin: "auto", padding: "3em 0" }}>
            <section style={{ maxWidth: "600px", marginBottom: "2em" }}>
              <figure className="bg-gray-100 rounded-xl p-8">
                <img
                  className="w-32 h-32 rounded-full mx-au"
                  src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                  alt=""
                  width="384"
                  height="512"
                />
                <div className="pt-6 space-y-4">
                  <blockquote>
                    <p className="text-lg font-semibold">
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-cyan-600">Sarah Dayan</div>
                    <div>Staff Engineer, Algolia</div>
                  </figcaption>
                </div>
              </figure>
            </section>
            <section style={{ maxWidth: "600px", marginBottom: "2em" }}>
              <figure className="shadow-lg rounded-xl flex-none w-80 md:w-xl">
                <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                  <svg
                    width="45"
                    height="36"
                    className="mb-5 fill-current text-orange-100"
                  >
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                  <p>
                    I have no design skills and with Tailwind I can actually
                    make good looking websites with ease and it's everything I
                    ever wanted in a CSS framework.
                  </p>
                </blockquote>
                <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-orange-400 to-violet-600">
                  <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full bg-orange-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-auto">
                    Sara Vieira
                    <br />
                    <span className="text-orange-100">CodeSandbox</span>
                  </div>
                </figcaption>
              </figure>
            </section>
            <section style={{ maxWidth: "600px", marginBottom: "2em" }}>
              <div className="relative z-10 rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:-mr-8 ConstraintBased_container__3fbpK">
                <h3 className="flex-none w-full sm:w-48 lg:w-full xl:w-48 bg-purple-50 rounded-tr-xl sm:rounded-tr-none sm:rounded-tl-xl lg:rounded-t-xl xl:rounded-tr-none xl:rounded-l-xl text-lg leading-6 font-semibold text-purple-800 px-4 py-3 sm:p-8 lg:px-6 lg:py-4 xl:p-8">
                  <span style="opacity: 1;">Width</span>
                </h3>
                <div className="relative flex-auto bg-white sm:rounded-tr-xl lg:rounded-b-xl lg:rounded-tr-none xl:rounded-bl-none xl:rounded-r-xl overflow-hidden">
                  <ul className="w-full font-mono text-xs leading-5 text-gray-600 space-y-4 px-4 py-6 sm:p-8 lg:p-6 xl:p-8">
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-64
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 16rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-56
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 14rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-48
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 12rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-40
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 10rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-32
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 8rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-24
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 6rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-20
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 5rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-16
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 4rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-12
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 3rem; transform: none;"
                      ></span>
                    </li>
                    <li className="flex items-center flex-wrap sm:flex-nowrap">
                      <span
                        className="flex-none w-full sm:w-11"
                        style="opacity: 1;"
                      >
                        w-10
                      </span>
                      <span
                        className="flex-none h-3 origin-left bg-gradient-to-br from-fuchsia-500 to-purple-600"
                        style="width: 2.5rem; transform: none;"
                      ></span>
                    </li>
                  </ul>
                  <div className="absolute z-10 bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white pointer-events-none"></div>
                </div>
              </div>
            </section>
            <section style={{ maxWidth: "600px", marginBottom: "2em", background: white }}>
              <div className="flex">
                <div className="flex-none w-48 relative">
                  <img
                    src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <form className="flex-auto p-6">
                  <div className="flex flex-wrap">
                    <h1 className="flex-auto text-xl font-semibold">
                      Classic Utility Jacket
                    </h1>
                    <div className="text-xl font-semibold text-gray-500">
                      $110.00
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                      In stock
                    </div>
                  </div>
                  <div className="flex items-baseline mt-4 mb-6">
                    <div className="space-x-2 flex">
                      <label>
                        <input
                          className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
                          name="size"
                          type="radio"
                          value="xs"
                          checked="checked"
                        />
                        XS
                      </label>
                      <label>
                        <input
                          className="w-9 h-9 flex items-center justify-center"
                          name="size"
                          type="radio"
                          value="s"
                        />
                        S
                      </label>
                      <label>
                        <input
                          className="w-9 h-9 flex items-center justify-center"
                          name="size"
                          type="radio"
                          value="m"
                        />
                        M
                      </label>
                      <label>
                        <input
                          className="w-9 h-9 flex items-center justify-center"
                          name="size"
                          type="radio"
                          value="l"
                        />
                        L
                      </label>
                      <label>
                        <input
                          className="w-9 h-9 flex items-center justify-center"
                          name="size"
                          type="radio"
                          value="xl"
                        />
                        XL
                      </label>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 underline">
                      Size Guide
                    </div>
                  </div>
                  <div className="flex space-x-3 mb-4 text-sm font-medium">
                    <div className="flex-auto flex space-x-3">
                      <button
                        className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
                        type="submit"
                      >
                        Buy now
                      </button>
                      <button
                        className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
                        type="button"
                      >
                        Add to bag
                      </button>
                    </div>
                    <button
                      className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
                      type="button"
                      aria-label="like"
                    >
                      <svg width="20" height="20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Free shipping on all continental US orders.
                  </p>
                </form>
              </div>
            </section>
          </div>
        </div>
      );
    },
  };
}

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() => {
  mount(<TailwindCSSExamples />, document.getElementById("root"));
});
