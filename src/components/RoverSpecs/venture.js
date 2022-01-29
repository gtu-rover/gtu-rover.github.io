import { SeperatorDownWhite, SeperatorUp } from '../seperators';

const Spec = (props) => {
  return <>{props.children}</>;
};

Spec.Title = (props) => (
  <h5 class="h5-rover-page" style={{ fontWeight: 600 }}>
    {props.children}
  </h5>
);

Spec.P = (props) => <p class="p-rover-page">{props.children}</p>;

const VentureSpecs = () => {
  return (
    <section
      class="jumbotron jumbotron-fluid align-content-center purple-bg"
      style={{ padding: 0, margin: 0 }}
    >
      <SeperatorDownWhite />
      <div class="row-second-div row">
        <div
          class="container"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          //   style="margin-left: auto !important; margin-right: auto !important"
        >
          <h1 style={{ textAlign: 'center', margin: 30 }}>Venture</h1>
          <div
            class="row"
            // style={{ paddingTop: 75, paddingBottom: 50, marginRight: 50 }}
          >
            <div class="col-lg-3 ">
              <Spec>
                <Spec.Title>Size</Spec.Title>
                <Spec.P>Weight: 50 kg</Spec.P>
                <Spec.P>Dimensions: 984x1098x342 mm</Spec.P>
              </Spec>
              <Spec>
                <Spec.Title>Performance</Spec.Title>
                <Spec.P>Estimated maximum obstacle size: 150mm</Spec.P>
                <Spec.P>Run time: Estimated 1 hours of nominal driving</Spec.P>
                <Spec.P>
                  Connection range: Up to 200m(with live video stream)
                </Spec.P>
              </Spec>

              <Spec>
                <Spec.Title>Wheels</Spec.Title>
                <Spec.P>
                  {' '}
                  Motors: 4x in-hub brushed DC motor with 55:1 planetary gearbox{' '}
                </Spec.P>
                <Spec.P> Wheel diameter: 142mm </Spec.P>
                <Spec.P> Tire: Pneumatic rubber tire </Spec.P>
              </Spec>
            </div>

            <div class="col-lg-3">
              <Spec>
                <Spec.Title>First Battery Pack</Spec.Title>
                <Spec.P>Voltage: 11.1V DC</Spec.P>
                <Spec.P>Capacity: 44000 mAh</Spec.P>
                <Spec.P>Type: Lithium Polymer</Spec.P>
              </Spec>

              <Spec>
                <Spec.Title>Second Battery Pack</Spec.Title>
                <Spec.P>Voltage: 22.2V</Spec.P>
                <Spec.P>Capacity: 6200 mAh</Spec.P>
                <Spec.P>Type: Lithium Polymer</Spec.P>
              </Spec>

              <Spec>
                <Spec.Title>Speed</Spec.Title>
                <Spec.P>Max. linear speed: 0.9m/s</Spec.P>
                <Spec.P>Max. angular speed:</Spec.P>
              </Spec>
            </div>

            <div class="col-lg-3 ta-center">
              <img
                class="image-rover-page"
                src="/images/rover/rover_front_white.png"
                style={{ height: 400 }}
              />
            </div>
            <div class="col-lg-3 ta-center">
              <img
                class="image-rover-page"
                src="/images/rover/rover_side_white.png"
                style={{ height: 400 }}
              />
            </div>
          </div>
        </div>
      </div>
      <SeperatorUp />
    </section>
  );
};
export default VentureSpecs;
